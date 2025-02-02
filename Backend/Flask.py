from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from transformers import AutoModelForSequenceClassification, AutoTokenizer, pipeline
from supabase import create_client, Client
import os
from dotenv import load_dotenv
import pandas as pd
import json
load_dotenv()
app = Flask(__name__)
CORS(app)

SUPABASE_KEY = os.getenv("SUPABASE_KEY")
SUPABASE_URL = os.getenv("SUPABASE_URL")
try:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    print("Connection Successfull")
    # response = supabase.table("users").select("*").execute()
except Exception as e:
    print(e)
# Load the saved model and tokenizer
model_name = "distilbert-base-uncased-finetuned-sst-2-english"
model = AutoModelForSequenceClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)
critical_keywords = ["water","supply","garbage","cut off","week","month","electricity"]
# Initialize the pipeline with the loaded model
classifier = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    print("ITS WORKINGGGG")
    try:
        response = supabase.table("complaints").select("description").execute()
        print(response.data)
        complaints=[]
        for i in response.data:
            complaints.append(i["description"])
        print(complaints)
        result = classifier(complaints)
        df = pd.DataFrame(complaints, columns=['Complaint'])
        df['Sentiment'] = [res['label'] for res in result]
        df['Confidence'] = [res['score'] for res in result]
        # Function to count keyword matches
        def keyword_match_count(complaint, keywords):
            return sum(1 for word in keywords if word in complaint.lower())

        # Add a column for keyword match count
        df['Keyword Matches'] = df['Complaint'].apply(lambda x: keyword_match_count(x, critical_keywords))
        def assign_priority(sentiment, confidence, keyword_matches):
            if sentiment == 'NEGATIVE' and confidence > 0.996 and keyword_matches>0:  # Critical keyword match takes precedence
                return 1  # Highest priority
            elif sentiment == 'NEGATIVE' and confidence > 0.99:
                return 2
            elif sentiment == 'NEGATIVE' and confidence <= 0.8:
                return 3    
            elif sentiment == 'POSITIVE' and confidence > 0.8:
                return 5
            else:
                return 4

        df['Priority'] = df.apply(
            lambda row: assign_priority(row['Sentiment'], row['Confidence'], row['Keyword Matches']),
            axis=1
        )
        df_json = df.to_json(orient="records")
        df_json_obj = json.loads(df_json)
        # print(type(df_json_obj))
        for i in df_json_obj:
            print(i)
            supabase.table("complaints").update({"score":i["Priority"]}).eq("description", i["Complaint"]).execute()
        # print(df_json_obj)
        # print(result)
        
        # result = classifier(complaints)
    except Exception as e:
        return jsonify(False)
    finally:
        return jsonify(True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
