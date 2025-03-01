import { useState, useEffect } from "react";
import supabase from "../supa-client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Cards = () => {
  const [complaints, setComplaints] = useState([]);
  const [userId, setUserId] = useState(null);
  const [mlScore, setMlScore] = useState(null);

useEffect(() => {
  const fetchUserAndComplaints = async () => {
    // Fetch user session
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();
    if (sessionError) {
      console.error("Error fetching session:", sessionError);
      return;
    }

    const userId = sessionData?.session?.user?.id;
    if (userId) setUserId(userId);

    // Fetch complaints
    const { data: complaintsData, error: complaintsError } = await supabase
      .from("complaints")
      .select("*")
      .order("SLno", { ascending: true });

    if (complaintsError) {
      console.error("Error fetching complaints:", complaintsError);
      return;
    }

    setComplaints(complaintsData);

    // Fetch ML score for the logged-in user
    if (userId) {
      const { data: userComplaint, error: mlError } = await supabase
        .from("complaints")
        .select("score")
        .eq("u_id", userId)
        .order("SLno", { ascending: false }) // Get the latest complaint
        .limit(1)
        .single();

      if (mlError) {
        console.error("Error fetching ML score:", mlError);
      } else {
        setMlScore(userComplaint?.score);
      }
    }
  };

  fetchUserAndComplaints();
}, []);


  const toggleLike = async (complaintId, liked, currentLikes) => {
    if (!userId) return;

    const updatedLikes = liked ? currentLikes - 1 : currentLikes + 1;

    const { error } = await supabase
      .from("complaints")
      .update({ likes_count: updatedLikes })
      .eq("SLno", complaintId);

    if (error) console.error("Error updating likes:", error);
    else refreshComplaints();
  };

  const refreshComplaints = async () => {
    const { data: updatedComplaints, error } = await supabase
      .from("complaints")
      .select("*")
      .order("SLno", { ascending: true });

    if (error) console.error("Error refreshing complaints:", error);
    else setComplaints(updatedComplaints);
  };

  return (
    <div className="max-3/4 p-4">
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
              <div className="mt-4 flex items-center gap-2 text-3xl">
                <button
                  onClick={() =>
                    toggleLike(
                      complaint.SLno,
                      complaint.likes_count > 0,
                      complaint.likes_count
                    )
                  }
                  className="text-gray-500 hover:text-red-500 transition-all duration-300"
                >
                  {complaint.likes_count > 0 ? (
                    <AiFillHeart className="text-red-500" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                <span className="text-lg text-gray-700 font-semibold">
                  {complaint.likes_count} Likes
                </span>
              </div>

              {mlScore !== null && (
                <div className="absolute right-6 top-8  p-2 w-12 text-center rounded-2xl text-xl bg-black text-white font-bold">
                   {mlScore}
                </div>
              )}

              {/* verified_badge */}
              <div className="absolute right-6 top-24 text-green-600 text-5xl">
                <RiVerifiedBadgeFill />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
