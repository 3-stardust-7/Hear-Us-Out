import React, { useContext, useState } from "react";
import { auth, provider, signInWithPopup } from "../config/firebase"; // Firebase imports
import supabase from "../supa-client"; // Supabase imports
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toast styles
import { Auth } from "../context/authcontext";


const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const [user, setUser] = useContext(Auth);
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        setUser(user);
        console.log(user);
      }

      // Check if user exists in Supabase
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("u_id", user.uid)
        .single();

      if (error) {
        setError("User not found in Supabase.");
        toast.error("User not found in Supabase.");
        return;
      }

      // User found in Supabase, log them in
      console.log("User logged in from Supabase:", data);

      // Show success toast
      toast.success("Login successful! Redirecting to your profile...");

      // Redirect to /users page after 2 seconds
      setTimeout(() => {
        navigate("/users"); // Redirect to users page
      }, 2000);
    } catch (err) {
      setError("Google Login failed. Try again.");
      console.error("Google Login error:", err);
      toast.error("Google Login failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <h3 className=" font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h3>
        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-400 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        {/* Sign-up Link */}
        <p className="text-gray-600 text-sm text-center mt-4">
          Don't have an account?
          <a
            href="/signup"
            className="text-blue-600 font-semibold hover:underline ml-1"
          >
            Sign up here
          </a>
        </p>
        {/* Toast notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
