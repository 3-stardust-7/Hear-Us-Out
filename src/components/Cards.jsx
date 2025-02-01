import { useState, useEffect } from "react";
import supabase from "../supa-client";

const Cards = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      let { data, error } = await supabase.from("complaints").select("*");

      if (error) console.error("Error fetching complaints:", error);
      else setComplaints(data);
    };

    fetchComplaints();
  }, []);

  const getScoreColor = (score) => {
    if (score >= 8) return "bg-red-500";
    if (score >= 5) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Complaint Records
      </h2>
      {complaints.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          No complaints found.
        </p>
      ) : (
        <div className="grid gap-5 ">
          {complaints.map((complaint) => (
            
            <div
              key={complaint.id}
              className="bg-gray-400 p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 min-h-[250px] relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {complaint.name}
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                <strong>Description:</strong> {complaint.description}
              </p>
              {complaint.score !== null && (
                <div
                  className={`${getScoreColor(
                    complaint.score
                  )} text-white font-bold py-2 px-4 rounded-md absolute top-4 right-4 transform rotate-45 origin-top-right`}
                >
                  {complaint.score}
                </div>
              )}
              {complaint.image_url && (
                <img
                  src={complaint.image_url}
                  alt="Complaint Image"
                  className="w-full h-auto rounded-md mt-4"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
