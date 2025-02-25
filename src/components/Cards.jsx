import { useState, useEffect } from "react";
import supabase from "../supa-client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Cards = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const { data, error } = await supabase.from("complaints").select("*");
      if (error) console.error("Error fetching complaints:", error);
      else setComplaints(data);
    };
    fetchComplaints();
  }, []);

  const handleLike = async (SLno, liked, currentLikes) => {
    const updatedLikes = liked ? currentLikes - 1 : currentLikes + 1;

    const { error } = await supabase
      .from("complaints")
      .update({ likes: updatedLikes })
      .eq("SLno", SLno);

    if (error) console.error("Error updating likes:", error);
    else {
      setComplaints((prev) =>
        prev.map((complaint) =>
          complaint.SLno === SLno
            ? { ...complaint, likes: updatedLikes, liked: !liked }
            : complaint
        )
      );
    }
  };

  return (
    <div className="max-3/4 mx-auto p-4">
      <div className="text-5xl mb-20 font-bold text-white text-center">
        Complaint Records
      </div>
      {complaints.length === 0 ? (
        <p className="text-center pb-4 mb-20 text-xl text-gray-500">
          No complaints found.
        </p>
      ) : (
        <div className="grid mt-20 gap-5">
          {complaints.map((complaint) => (
            <div
              key={complaint.SLno}
              className="bg-gradient-to-b from-gray-300 to-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 min-h-[250px] relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {complaint.name}
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                <strong>Description:</strong> {complaint.description}
              </p>
              {complaint.image && (
                <img
                  src={complaint.image}
                  alt="Complaint Image"
                  className="h-96 rounded-md mt-4"
                />
              )}
              {/* ❤️ Like Button & Count */}
              <div className="mt-4 text-4xl flex items-center gap-2">
                <button
                  onClick={() =>
                    handleLike(
                      complaint.SLno,
                      complaint.liked,
                      complaint.likes || 0
                    )
                  }
                  className="text-gray-500 hover:text-red-500 transition-all duration-300"
                >
                  {complaint.liked ? (
                    <AiFillHeart className="text-red-500" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                <span className="text-lg text-gray-700">
                  {complaint.likes || 0} Likes
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
