import { useState, useEffect, useContext } from "react";
import supabase from "../supa-client"; // Import Supabase client
import { useNavigate } from "react-router-dom"; // For redirecting after submit
import { Auth } from "../context/authcontext";
import { sendReq } from "../functions/sendReq";

const Register = () => {
  const [complaintName, setComplaintName] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [user, setUser] = useContext(Auth); // Track user state

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Use supabase.auth.getSession() instead of session()
  //   const getSession = async () => {
  //     const { data: session, error } = await supabase.auth.getSession();
  //     if (error) {
  //       console.error("Error getting session:", error);
  //     } else {
  //       setUser(session?.user || null); // Set user based on session data
  //     }
  //   };

  //   // Call getSession to initialize user
  //   getSession();

  //   // Listen for authentication state changes
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     ( session) => {
  //       if (session) {
  //         setUser(session.user); // Set user data on auth state change
  //       } else {
  //         setUser(null); // If logged out, set user to null
  //       }
  //     }
  //   );

  //   // Cleanup listener on unmount
  //   return () => {
  //     authListener?.unsubscribe(); // Correctly unsubscribe by calling unsubscribe on the return value of onAuthStateChange
  //   };
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to submit a complaint!");
      navigate("/login"); // Redirect to login if no user session
      return;
    }

    setLoading(true);

    try {
      const userId = user.uid; // Get user ID from session

      // Upload image if provided
      let imageUrl = null;

      if (image) {
        // Upload the image to Supabase Storage
        const { data, error } = await supabase.storage
          .from("complaint-images")
          .upload(`images/${image.name}`, image);

        if (error) throw error;

        // If upload successful, assign image path to imageUrl
        imageUrl = data?.path;

        // Get the public URL of the uploaded image
        const { publicURL, error: urlError } = supabase.storage
          .from("complaint-images")
          .getPublicUrl(imageUrl);

        if (urlError) throw urlError;

        imageUrl = publicURL; // Update imageUrl with the public URL
      }

      // Insert the complaint into the database
      const { error } = await supabase.from("complaints").insert([
        {
          name: complaintName,
          description: problemDescription,
          image: imageUrl, // Store the image URL in the database
          u_id: userId, // User ID
        },
      ]);

      if (error) {
        console.error("Error inserting complaint:", error);
      } else {
        console.log("Complaint successfully added!");
      }

      alert("Complaint registered successfully!");
      const response = await sendReq();
      navigate("/users"); // Redirect after submitting
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Error submitting complaint.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register Complaint</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="complaintName"
            className="block text-sm font-medium text-gray-700"
          >
            Complaint Name
          </label>
          <input
            id="complaintName"
            type="text"
            value={complaintName}
            onChange={(e) => setComplaintName(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="problemDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Problem Description
          </label>
          <textarea
            id="problemDescription"
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            required
            rows="4"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image of Problem (Optional)
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
