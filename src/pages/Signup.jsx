import { useState } from "react";
import supabase from "../supa-client";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("Signup successful! Check your email for the verification link.");
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   auth,
//   provider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
// } from "../config/firebase"; // Firebase imports
// import supabase from "../supa-client"; // Supabase imports
// import { ToastContainer, toast } from "react-toastify"; // Import Toast components
// import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
// import image from "../assets/image.jpg";

// const Signup = () => {
//   const [error, setError] = useState("");
//   const [isGoogleAuthenticated, setIsGoogleAuthenticated] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     email: "",
//     password: "",
//     name: "",
//     address: "",
//     phone: "",
//     identifier: "", // Ensure identifier is always controlled
//   });

//   const [loading, setLoading] = useState(false);
//   const [userType, setUserType] = useState("User"); // Add this

//   const navigate = useNavigate(); // useNavigate hook for redirecting

//   const handleGoogleSignup = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // User authenticated via Google
//       setIsGoogleAuthenticated(true);

//       // Set the name from Google user profile
//       setUserDetails((prevDetails) => ({
//         ...prevDetails,
//         name: user.displayName || "", // Set name from Google auth
//         email: user.email, // Set email from Google auth
//       }));

//       // Redirect to the form for address and phone number
//       toast.success("Google Sign-up successful! Please complete your details.");
//     } catch (err) {
//       setError("Google Sign-up failed. Try again.");
//       console.error("Google Sign-up error:", err);
//     }
//   };

//   const handleEmailSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//        await createUserWithEmailAndPassword(
//         auth,
//         userDetails.email,
//         userDetails.password
//       );
//       //const user = userCredential.user;

//       // Successfully created user with email/password, now ask for address & phone
//       toast.success("Email Sign-up successful! Please complete your details.");
//       setIsGoogleAuthenticated(true); // Set this to true so the next form appears
//     } catch (err) {
//       setError("Email Sign-up failed. Try again.");
//       console.error("Email Sign-up error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Validate phone number (ensure it's numeric)
//     const phoneIsValid = userDetails.phone && !isNaN(userDetails.phone);

//     if (!phoneIsValid) {
//       setError("Please enter a valid phone number.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Store the user's details (address, phone) in Supabase
//       const { data, error } = await supabase.from("users").upsert([
//         {
//           u_id: auth.currentUser.uid,
//           name: userDetails.name, // Save the name
//           email: userDetails.email,
//           password: userDetails.password, // For email auth
//           address: userDetails.address,
//           phone: phoneIsValid ? userDetails.phone : null,
//           user_type: userType, // Store user type
//           identifier: userDetails.identifier, // Store Aadhar or DARPAN ID
//           is_active: true,
//         },
//       ]);

//       if (error) {
//         setError(error.message);
//         return;
//       }

//       // Successfully added to Supabase, now redirect to user's profile
//       toast.success("Signup complete! Redirecting to your profile...");
//       setTimeout(() => {
//         navigate("/users");
//       }, 2000);
//     } catch (err) {
//       setError("Failed to update user details. Try again.");
//       console.error("Error saving details:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//           className="min-h-screen bg-cover bg-fixed bg-center"
//           style={{
//             backgroundImage: `url(${image})`,
//             backgroundColor: "rgba(255, 255, 255, 0.85)",
//             backgroundBlendMode: "overlay",

//           }}
//         >
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Create an Account
//         </h2>

//         {/* Google Sign-up Button (only visible if not signed up yet) */}
//         {!isGoogleAuthenticated && (
//           <button
//             onClick={handleGoogleSignup}
//             className="w-full flex items-center justify-center border border-gray-400 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
//           >
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google Icon"
//               className="w-5 h-5 mr-2"
//             />
//             Sign up with Google
//           </button>
//         )}

//         {!isGoogleAuthenticated && (
//           <div className="my-4 flex items-center">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-gray-500">or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>
//         )}

//         {/* Email/Password Sign-up Form (only visible if not signed up yet) */}
//         {!isGoogleAuthenticated && (
//           <form onSubmit={handleEmailSignup} className="mt-6 space-y-4">
//             {/* Email Field */}
//             <div>
//               <label className="block text-gray-600 text-sm font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={userDetails.email}
//                 onChange={(e) =>
//                   setUserDetails({ ...userDetails, email: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-gray-600 text-sm font-medium mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 value={userDetails.password}
//                 onChange={(e) =>
//                   setUserDetails({ ...userDetails, password: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Dropdown for selecting User Type */}
//             <div>
//               <select
//                 value={userType}
//                 onChange={(e) => {
//                   setUserType(e.target.value);
//                   setUserDetails({ ...userDetails, identifier: "" }); // Reset ID field when switching
//                 }}
//                 className="w-full px-4 py-2 mt-2 mb-4 border rounded-lg"
//                 required
//               >
//                 <option value="User">User</option>
//                 <option value="NGO">NGO</option>
//               </select>

//               {/* Conditional input fields based on selection */}
//               {userType === "User" ? (
//                 <input
//                   type="number"
//                   placeholder="Aadhar ID"
//                   value={userDetails.identifier}
//                   onChange={(e) =>
//                     setUserDetails({
//                       ...userDetails,
//                       identifier: e.target.value,
//                     })
//                   }
//                   className="w-full px-4 py-2  mb-4 border rounded-lg"
//                   required
//                 />
//               ) : (
//                 <input
//                   type="text"
//                   placeholder="DARPAN ID"
//                   value={userDetails.identifier}
//                   onChange={(e) =>
//                     setUserDetails({
//                       ...userDetails,
//                       identifier: e.target.value,
//                     })
//                   }
//                   className="w-full px-4 py-2 mb-4 border rounded-lg"
//                   required
//                 />
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Signing up..." : "Sign up with Email"}
//             </button>
//           </form>
//         )}

//         {/* Address and Phone Form (shown after Google or Email auth) */}
//         {isGoogleAuthenticated && (
//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             {/* Name Field */}
//             <div>
//               <label className="block text-gray-600 text-sm font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 value={userDetails.name}
//                 onChange={(e) =>
//                   setUserDetails({ ...userDetails, name: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Address Field */}
//             <div>
//               <label className="block text-gray-600 text-sm font-medium mb-1">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 value={userDetails.address}
//                 onChange={(e) =>
//                   setUserDetails({ ...userDetails, address: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Phone Number Field */}
//             <div>
//               <label className="block text-gray-600 text-sm font-medium mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 value={userDetails.phone}
//                 onChange={(e) =>
//                   setUserDetails({ ...userDetails, phone: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Saving..." : "Complete Signup"}
//             </button>
//           </form>
//         )}

//         {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

//         {/* Sign-in Link */}
//         <p className="text-gray-600 text-sm text-center mt-4">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-blue-600 font-semibold hover:underline ml-1"
//           >
//             Login here
//           </a>
//         </p>
//       </div>

//       {/* Toast notifications */}
//       <ToastContainer />
//     </div>
//     </div>
//   );
// };

// export default Signup;
