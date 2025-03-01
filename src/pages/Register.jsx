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


//2 second!!!!

// import { useState, useContext, useEffect, useRef } from "react";
// import supabase from "../supa-client";
// import { useNavigate } from "react-router-dom";
// import { Auth } from "../context/authcontext";
// import { motion } from "framer-motion";
// import registerbg from "../assets/registerbg.png";
// import { v4 as uuidv4 } from "uuid";

// const Register = () => {
//   const [complaintName, setComplaintName] = useState("");
//   const [problemDescription, setProblemDescription] = useState("");
//   // const [image, setImage] = useState([]);
//   const [loading, setLoading] = useState(false);
//   //const [dataUri, setDataUri] = useState("");
//   const [user] = useContext(Auth);
//   const canvasRef = useRef(null); // ✅ Added canvasRef
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       console.log("User not authenticated. Redirecting...");
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   if (!user) return null;

//   // const readImageAsDataUri = (file) =>
//   //   new Promise((resolve, reject) => {
//   //     const reader = new FileReader();
//   //     reader.onload = (e) => {
//   //       const img = new Image();
//   //       img.src = e.target.result;

//   //       img.onload = () => {
//   //         const canvas = canvasRef.current;
//   //         const ctx = canvas.getContext("2d");
//   //         canvas.width = img.width;
//   //         canvas.height = img.height;
//   //         ctx.drawImage(img, 0, 0);
//   //         const uri = canvas.toDataURL("image/png");
//   //         resolve(uri);
//   //       };

//   //       img.onerror = reject;
//   //     };
//   //     reader.onerror = reject;
//   //     reader.readAsDataURL(file);
//   //   });

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   let file = e.target.files[0];

//   //   const { data, error } = await supabase.storage
//   //     .from("complaint-images")
//   //     .upload(user + "/" + uuidv4(), file);

//   //   if (data) {
//   //     getImage();
//   //   } else {
//   //     console.error(error);
//   //   }

//   //   //   try {
//   //   //     const fileInput = document.getElementById("image");
//   //   //     const file = fileInput.files[0];
//   //   //     let imageUri = null;

//   //   //     if (file) {
//   //   //       imageUri = await readImageAsDataUri(file); // Wait for image to be processed
//   //   //       setDataUri(imageUri);
//   //   //     }

//   //       const { error: insertError } = await supabase.from("complaints").insert([
//   //         {
//   //           name: complaintName,
//   //           description: problemDescription,
//   //           u_id: user.uid,
//   //         },
//   //       ]);

//   //   //     if (insertError) throw insertError;

//   //   //     alert("Complaint registered successfully!");
//   //   //     navigate("/users");
//   //   //   } catch (error) {
//   //   //     console.error("Error submitting complaint:", error);
//   //   //     alert("Error submitting complaint.");
//   //   //   } finally {
//   //   //     setLoading(false);
//   //   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const fileInput = document.getElementById("image");
//       const file = fileInput.files[0];

//       if (!file) {
//         alert("Please upload an image.");
//         setLoading(false);
//         return;
//       }

//       const filePath = `${user.uid}/${uuidv4()}`;
//       const { data, error } = await supabase.storage
//         .from("complaint-images")
//         .upload(filePath, file);

//       if (error) throw error;

//       const imageUrl = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/complaint-images/${filePath}`;

//       const { error: insertError } = await supabase.from("complaints").insert([
//         {
//           name: complaintName,
//           description: problemDescription,
//           u_id: user.uid,
//           image: imageUrl, // ✅ Storing image path
//         },
//       ]);

//       if (insertError) throw insertError;

//       alert("Complaint registered successfully!");
//       navigate("/users");
//     } catch (err) {
//       console.error("Error submitting complaint:", err);
//       console.error("User object:", user);
//       alert("Error submitting complaint.");
//     } finally {
//       setLoading(false);
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
//             <motion.div>
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

//             <motion.div>
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

//             <motion.div>
//               <label
//                 htmlFor="image"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Upload Image
//               </label>
//               <input
//                 id="image"
//                 type="file"
//                 accept="image/png, image/jpeg"
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//               />
//               <canvas ref={canvasRef} style={{ display: "none" }} />
//             </motion.div>

//             <motion.div>
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







import { useState, useEffect, useRef } from "react";
import supabase from "../supa-client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import registerbg from "../assets/registerbg.png";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { sendReq } from "../functions/sendReq";

const Register = () => {
  const [complaintName, setComplaintName] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // 🔑 Fetch user from Supabase session
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.log("User not authenticated. Redirecting...");
        navigate("/login");
      } else {
        setUser(data.user);
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user) return null;

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please upload an image.");
      setLoading(false);
      return;
    }

    const filePath = `${user.id}/${uuidv4()}`;
    const { error: uploadError } = await supabase.storage
      .from("complaint-images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const imageUrl = `${
      import.meta.env.VITE_SUPABASE_URL
    }/storage/v1/object/public/complaint-images/${filePath}`;

    const { error: insertError } = await supabase.from("complaints").insert([
      {
        name: complaintName,
        description: problemDescription,
        u_id: user.id, // ✅ Supabase user ID
        image: imageUrl,
      },
    ]);

    if (insertError) throw insertError;

    alert("Complaint registered successfully!");

    // Call the ML API after complaint is registered
    const prediction = await sendReq();
    console.log("Prediction result:", prediction);

    navigate("/users");
  } catch (err) {
    console.error("Error submitting complaint:", err);
    alert("Error submitting complaint.");
  } finally {
    setLoading(false);
  }
};




  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${registerbg})`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex items-center justify-center bg-transparent">
        <motion.div
          className="max-w-md mt-20 w-full p-6 bg-black shadow-lg rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4  text-white text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Register Complaint
          </motion.h2>

          <motion.form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div>
              <label
                htmlFor="complaintName"
                className="block text-sm font-medium text-white"
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
                className="w-full mt-2 p-2.5 text-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </motion.div>

            <motion.div>
              <label
                htmlFor="problemDescription"
                className="block text-sm font-medium text-white"
              >
                Problem Description
              </label>
              <textarea
                id="problemDescription"
                value={problemDescription}
                placeholder=" Clear description of complaint"
                onChange={(e) => setProblemDescription(e.target.value)}
                required
                rows="4"
                className="w-full mt-2 p-2 border text-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </motion.div>

            <motion.div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-white"
              >
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/png, image/jpeg"
                required
                className="w-full mt-2 p-2.5 border text-white border-gray-300 rounded-md"
              />
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </motion.div>

            <motion.div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded bg-blue-600 text-white p-2.5 my-2 hover:bg-blue-700 disabled:bg-gray-300"
              >
                {loading ? "Submitting..." : "Submit Complaint"}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
      <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
        <div className=" flex justify-center  m-10">
          <button
            type="submit"
            disabled={loading}
            className="  w-40 rounded  text-white p-2 my-2 hover:bg-gray-600 bg-gray-900 disabled:bg-gray-300"
          >
            Back Home
          </button>
        </div>
      </Link>
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
