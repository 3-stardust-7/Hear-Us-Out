// import { useState, useEffect, useContext } from "react";
// import supabase from "../supa-client"; // Import Supabase client
// import { useNavigate } from "react-router-dom"; // For redirecting after submit
// import { Auth } from "../context/authcontext";
// import { sendReq } from "../functions/sendReq";

// const Register = () => {
//   const [complaintName, setComplaintName] = useState("");
//   const [problemDescription, setProblemDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useContext(Auth); // Track user state

//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("You must be logged in to submit a complaint!");
//       navigate("/login"); // Redirect to login if no user session
//       return;
//     }

//     setLoading(true);

//     try {
//       const userId = user.uid; // Get user ID from session

//       // Upload image if provided
//       let imageUrl = null;

//       if (image) {
//         // Upload the image to Supabase Storage
//         const { data, error } = await supabase.storage
//           .from("complaint-images")
//           .upload(`images/${image.name}`, image);

//         if (error) throw error;

//         // If upload successful, assign image path to imageUrl
//         imageUrl = data?.path;

//         // Get the public URL of the uploaded image
//         const { publicURL, error: urlError } = supabase.storage
//           .from("complaint-images")
//           .getPublicUrl(imageUrl);

//         if (urlError) throw urlError;

//         imageUrl = publicURL; // Update imageUrl with the public URL
//       }

//       // Insert the complaint into the database
//       const { error } = await supabase.from("complaints").insert([
//         {
//           name: complaintName,
//           description: problemDescription,
//           image: imageUrl, // Store the image URL in the database
//           u_id: userId, // User ID
//         },
//       ]);

//       if (error) {
//         console.error("Error inserting complaint:", error);
//       } else {
//         console.log("Complaint successfully added!");
//       }

//       alert("Complaint registered successfully!");
//       const response = await sendReq();
//       navigate("/users"); // Redirect after submitting
//     } catch (error) {
//       console.error("Error submitting complaint:", error);
//       alert("Error submitting complaint.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Register Complaint</h2>
//       <form className="space-y-4">
//         <div>
//           <label
//             htmlFor="complaintName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Complaint Name
//           </label>
//           <input
//             id="complaintName"
//             type="text"
//             value={complaintName}
//             onChange={(e) => setComplaintName(e.target.value)}
//             required
//             className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="problemDescription"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Problem Description
//           </label>
//           <textarea
//             id="problemDescription"
//             value={problemDescription}
//             onChange={(e) => setProblemDescription(e.target.value)}
//             required
//             rows="4"
//             className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="image"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Image of Problem
//           </label>
//           <input
//             id="image"
//             type="file"
//             onChange={handleImageChange}
//             className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <button
//             type="submit"
//             disabled={loading}
//             onClick={handleSubmit}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
//           >
//             {loading ? "Submitting..." : "Submit Complaint"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;



import { useState, useContext, useEffect } from "react";
import supabase from "../supa-client"; // Import Supabase client
import { useNavigate } from "react-router-dom"; // For redirecting after submit
import { Auth } from "../context/authcontext";
import { motion } from "framer-motion"; // Import Framer Motion
import registerbg from "../assets/registerbg.png"; // Background image

const Register = () => {
  const [complaintName, setComplaintName] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useContext(Auth); // Track user state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();
      if (error || !session?.session?.user) {
        console.log("No active session. Redirecting to login...");
        navigate("/login");
      } else {
        setUser(session.session.user);
        console.log("User authenticated:", session.session.user);
      }
    };

    fetchSession();
  }, []);


  if (window.opener) {
    window.close();
  } else {
    console.warn("Cannot close window: window.opener is null");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to submit a complaint!");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      // ✅ Check user session before proceeding
      const { data: session, error: sessionError } =
        await supabase.auth.getSession();
      console.log("User session:", session);

      if (sessionError || !session?.session?.user) {
        alert("Authentication error. Please log in again.");
        setLoading(false);
        navigate("/login");
        return;
      }

      const userId = session.session.user.id;
      let imageUrl = null;

      if (image) {
        if (!(image instanceof File)) {
          alert("Invalid image file. Please upload a valid image.");
          setLoading(false);
          return;
        }

        // ✅ Generate a unique filename
        const fileName = `${Date.now()}_${image.name}`;
        console.log("Uploading file:", fileName);

        // ✅ Attempt upload
        const { data, error } = await supabase.storage
          .from("complaint-images")
          .upload(`public/${fileName}`, image, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          console.error("Upload error:", error);
          throw error;
        }

        // ✅ Get the public URL
        imageUrl = supabase.storage
          .from("complaint-images")
          .getPublicUrl(`public/${fileName}`).publicUrl;
        console.log("Image uploaded successfully:", imageUrl);
      }

      // ✅ Insert into complaints table
      const { error: insertError } = await supabase.from("complaints").insert([
        {
          name: complaintName,
          description: problemDescription,
          image: imageUrl,
          u_id: userId,
        },
      ]);

      if (insertError) {
        console.error("Insert error:", insertError);
        throw insertError;
      }

      alert("Complaint registered successfully!");
      navigate("/users");
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Error submitting complaint.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setImage(file); // Store the file in state
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${registerbg})`,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-transparent">
        <motion.div
          className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Register Complaint
          </motion.h2>

          <motion.form className="space-y-4">
            <motion.div className="hover:scale-105 transition-transform duration-300">
              <label
                htmlFor="complaintName"
                className="block text-sm font-medium text-gray-700"
              >
                Complaint Name
              </label>
              <input
                id="complaintName"
                type="text"
                placeholder="Name of complaint"
                value={complaintName}
                onChange={(e) => setComplaintName(e.target.value)}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </motion.div>

            <motion.div className="hover:scale-105 transition-transform duration-300">
              <label
                htmlFor="problemDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Problem Description
              </label>
              <textarea
                id="problemDescription"
                value={problemDescription}
                placeholder="Clear description of complaint"
                onChange={(e) => setProblemDescription(e.target.value)}
                required
                rows="4"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </motion.div>

            <motion.div className="hover:scale-105 transition-transform duration-300">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/png, image/jpeg" // Only allow PNG/JPG files
                onChange={handleImageChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </motion.div>

            <motion.div className="hover:scale-105 transition-transform duration-300">
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
              >
                {loading ? "Submitting..." : "Submit Complaint"}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;













// import { useState, useContext } from "react";
// import supabase from "../supa-client"; // Import Supabase client
// import { useNavigate } from "react-router-dom"; // For redirecting after submit
// import { Auth } from "../context/authcontext";
// import { sendReq } from "../functions/sendReq";
// import { motion } from "framer-motion"; // Import Framer Motion
// import registerbg from "../assets/registerbg.png"; // or .png/.jpeg depending on the file

// //import { div } from "framer-motion/client";
// //https://image.shutterstock.com/image-photo/apartment-on-fire-2-260nw-738714538.jpg
// const Register = () => {
//   const [complaintName, setComplaintName] = useState("");
//   const [problemDescription, setProblemDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useContext(Auth); // Track user state

//   const navigate = useNavigate();

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!user) {
//     alert("You must be logged in to submit a complaint!");
//     navigate("/login");
//     return;
//   }

//   setLoading(true);

//   try {
//     // ✅ Check user session before proceeding
//     const { data: session, error: sessionError } =
//       await supabase.auth.getSession();
//     console.log("User session:", session);

//     if (sessionError || !session || !session.user) {
//       alert("Authentication error. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     const userId = session.user.id;
//     let imageUrl = null;

//     if (image) {
//       if (!(image instanceof File)) {
//         alert("Invalid image file. Please upload a valid image.");
//         setLoading(false);
//         return;
//       }

//       // ✅ Generate a unique filename
//       const fileName = `${Date.now()}_${image.name}`;
//       console.log("Uploading file:", fileName);

//       // ✅ Attempt upload
//       const { data, error } = await supabase.storage
//         .from("complaint-images")
//         .upload(`public/${fileName}`, image, {
//           cacheControl: "3600",
//           upsert: false,
//         });

//       if (error) {
//         console.error("Upload error:", error);
//         throw error;
//       }

//       // ✅ Get the public URL
//       imageUrl = supabase.storage
//         .from("complaint-images")
//         .getPublicUrl(`public/${fileName}`).publicUrl;
//       console.log("Image uploaded successfully:", imageUrl);
//     }

//     // ✅ Insert into complaints table
//     const { error: insertError } = await supabase.from("complaints").insert([
//       {
//         name: complaintName,
//         description: problemDescription,
//         image: imageUrl,
//         u_id: userId,
//       },
//     ]);

//     if (insertError) {
//       console.error("Insert error:", insertError);
//       throw insertError;
//     }

//     alert("Complaint registered successfully!");
//     navigate("/users");
//   } catch (error) {
//     console.error("Error submitting complaint:", error);
//     alert("Error submitting complaint.");
//   } finally {
//     setLoading(false);
//   }
// };



//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Get the selected file
//     if (file) {
//       setImage(file); // Store the file in state
//     }
//   };



//   return (
//     <div
//       className="min-h-screen bg-cover bg-fixed bg-center"
//       style={{
//         backgroundImage: `url(${registerbg})`,
//         backgroundColor: "rgba(255, 255, 255, 0.85)",
//         backgroundBlendMode: "overlay",
//       }}
//     >
//       <div className="flex items-center justify-center min-h-screen bg-transparent">
//         <motion.div
//           className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.h2
//             className="text-2xl font-bold mb-4 text-center"
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Register Complaint
//           </motion.h2>

//           <motion.form className="space-y-4">
//             <motion.div className="hover:scale-105 transition-transform duration-300">
//               <label
//                 htmlFor="complaintName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Complaint Name
//               </label>
//               <input
//                 id="complaintName"
//                 type="text"
//                 placeholder="Name of complaint"
//                 value={complaintName}
//                 onChange={(e) => setComplaintName(e.target.value)}
//                 required
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </motion.div>

//             <motion.div className="hover:scale-105 transition-transform duration-300">
//               <label
//                 htmlFor="problemDescription"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Problem Description
//               </label>
//               <textarea
//                 id="problemDescription"
//                 value={problemDescription}
//                 placeholder="Clear description of complaint"
//                 onChange={(e) => setProblemDescription(e.target.value)}
//                 required
//                 rows="4"
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </motion.div>

//             {/* <motion.div className="hover:scale-105 transition-transform duration-300">
//               <label
//                 htmlFor="image"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Image of Problem
//               </label>
//               <input
//                 id="image"
//                 type="file"
//                 onChange={handleImageChange}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//               />
//             </motion.div> */}

//             <motion.div className="hover:scale-105 transition-transform duration-300">
//               <label
//                 htmlFor="image"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Upload Image
//               </label>
//               <input
//                 id="image"
//                 type="file"
//                 accept="image/png, image/jpeg" // Only allow PNG/JPG files
//                 onChange={handleImageChange}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//               />
//             </motion.div>

//             {/* <label
//               htmlFor="image"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Image of Problem
//             </label>
//             <input
//               id="image"
//               type="text"
//               placeholder="Public url of image"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               required
//               className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             /> */}

//             <motion.div className="hover:scale-105 transition-transform duration-300">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 onClick={handleSubmit}
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
//               >
//                 {loading ? "Submitting..." : "Submit Complaint"}
//               </button>
//             </motion.div>
//           </motion.form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Register;
