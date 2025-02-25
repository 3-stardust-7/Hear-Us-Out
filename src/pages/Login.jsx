import { useState } from "react";
import supabase from "../supa-client";
import { useNavigate } from "react-router-dom";
import Loginbg from "../assets/Loginbg.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("Login successful!");
      navigate("/users");
    }
  };

  // ✅ Handle Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    setLoading(false);

    if (error) {
      setError(`Google login failed: ${error.message}`);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${Loginbg})`,
      }}
    >
      {/* Main content */}
      <div className="relative  z-10 flex justify-center items-center h-screen">
        <div className="bg-gray-100 shadow-2xl rounded-2xl px-8 py-4 w-md">
          <div className="text-2xl font-bold p-2 text-center">
            Welcome back!
          </div>
          <div className="text-3xl font-bold mb-4 text-center">Login</div>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="px-2 font-extralight text-xl">Email</div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border bg-white rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="px-2 font-light text-xl">Password</div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border bg-white rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-gray-700 rounded  text-white py-3  hover:bg-black transition"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
          <hr />

            <button
              onClick={handleGoogleLogin}
              className="w-full shadow-md flex items-center p-3 justify-center border border-gray-00 bg-gray-100 text-gray-900 hover:text-gray-100 hover:bg-black rounded transition-all duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google Icon"
                className="w-5 h-5 mr-2 "
              />
              Sign in with Google
            </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// import React, { useContext, useState } from "react";
// import { auth, provider, signInWithPopup } from "../config/firebase"; // Firebase imports
// import supabase from "../supa-client"; // Supabase imports
// import { useNavigate } from "react-router-dom"; // React Router for navigation
// import { ToastContainer, toast } from "react-toastify"; // Toast notifications
// import "react-toastify/dist/ReactToastify.css"; // Toast styles
// import { Auth } from "../context/authcontext";
// import Loginbg from "../assets/Loginbg.png";

// const Login = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Hook for navigation
//   const [user, setUser] = useContext(Auth);
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       if (user) {
//         setUser(user);
//         console.log(user);
//       }

//       // Check if user exists in Supabase
//       const { data, error } = await supabase
//         .from("users")
//         .select("*")
//         .eq("u_id", user.uid)
//         .single();

//       if (error) {
//         setError("User not found in Supabase.");
//         toast.error("User not found in Supabase.");
//         return;
//       }

//       // User found in Supabase, log them in
//       console.log("User logged in from Supabase:", data);

//       // Show success toast
//       toast.success("Login successful! Redirecting to your profile...");

//       // Redirect to /users page after 2 seconds
//       setTimeout(() => {
//         navigate("/users"); // Redirect to users page
//       }, 2000);
//     } catch (err) {
//       setError("Google Login failed. Try again.");
//       console.error("Google Login error:", err);
//       toast.error("Google Login failed. Try again.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-fixed bg-center"
//       style={{
//         backgroundImage: `url(${Loginbg})`,
//         backgroundColor: "rgba(255, 255, 255, 0.5)",
//         backgroundBlendMode: "overlay",

//       }}
//     >
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//           <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//             Login
//           </h1>
//           <h3 className=" font-bold text-center text-gray-800 mb-6">
//             Welcome Back!
//           </h3>
//           {/* Google Login Button */}
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center border border-gray-400 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
//           >
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google Icon"
//               className="w-5 h-5 mr-2"
//             />
//             Sign in with Google
//           </button>
//           {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
//           {/* Sign-up Link */}
//           <p className="text-gray-600 text-sm text-center mt-4">
//             Don't have an account?
//             <a
//               href="/signup"
//               className="text-blue-600 font-semibold hover:underline ml-1"
//             >
//               Sign up here
//             </a>
//           </p>
//           {/* Toast notifications */}
//           <ToastContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
