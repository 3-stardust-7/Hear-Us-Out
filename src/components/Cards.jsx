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
    if (score >= 8) return "bg-black";
    if (score >= 5) return "bg-black";
    return "bg-black";
  };

  return (
    <div className=" max-3/4 mx-auto p-4">
      <div className="text-5xl mb-20 font-bold text-white text-center">
        Complaint Records
      </div>
      {complaints.length === 0 ? (
        <p className="text-center pb-4 mb-20 text-xl text-gray-500">
          No complaints found.
        </p>
      ) : (
        <div className="grid mt-20 gap-5 ">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="bg-gradient-to-b  from-gray-300 to-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 min-h-[250px] relative overflow-hidden"
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
                  )} text-white font-bold py-3 px-4 rounded-md absolute top-4 right-4 transform origin-top-right`}
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
