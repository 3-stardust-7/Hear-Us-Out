import { useState } from "react";
import supabase from "../supa-client";
import { useNavigate } from "react-router-dom";
import Loginbg from "../assets/Loginbg.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error(error.message);
    } else {
      toast.success("Login successful!");

      setTimeout(() => {
        setLoading(false);
        navigate("/users");
      }, 2000);
    }
  };

  // ✅ Handle Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/users", // ✅ Ensure redirection to /users
      },
    });
    setLoading(false);

    if (error) {
      setError(`Google login failed: ${error.message}`);
      toast.error(`Google login failed: ${error.message}`);
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
      <div className="relative z-10 flex justify-center items-center h-screen">
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
              className="w-full bg-gray-700 rounded text-white py-3 hover:bg-black transition"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
          <hr />

          <button
            onClick={handleGoogleLogin}
            className="w-full shadow-md flex items-center p-3 justify-center border border-gray-00 bg-gray-100 text-gray-900 hover:text-gray-100 hover:bg-black rounded transition-all duration-300"
            disabled={loading}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Icon"
              className="w-5 h-5 mr-2 "
            />
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}








// import { useState } from "react";
// import supabase from "../supa-client";
// import { useNavigate } from "react-router-dom";
// import Loginbg from "../assets/Loginbg.png";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ Handle Email/Password Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message);
//       toast.error(error.message);
//     } else {
//       toast.success("Login successful!");

//       setTimeout(() => {
//         setLoading(false);
//         navigate("/users");
//       }, 2000);
//     }
//   };

//   // ✅ Handle Google Login
//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });
//     setLoading(false);

//     if (error) {
//       setError(`Google login failed: ${error.message}`);
//     }
//   };

//   return (
//     <div
//       className="relative min-h-screen bg-center bg-cover bg-fixed"
//       style={{
//         backgroundImage: `url(${Loginbg})`,
//       }}
//     >
//       {/* Main content */}
//       <div className="relative  z-10 flex justify-center items-center h-screen">
//         <div className="bg-gray-100 shadow-2xl rounded-2xl px-8 py-4 w-md">
//           <div className="text-2xl font-bold p-2 text-center">
//             Welcome back!
//           </div>
//           <div className="text-3xl font-bold mb-4 text-center">Login</div>
//           {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

//           <form onSubmit={handleLogin} className="space-y-4">
//             <div className="px-2 font-extralight text-xl">Email</div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 mb-4 border bg-white rounded-xl"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <div className="px-2 font-light text-xl">Password</div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 mb-4 border bg-white rounded-xl"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-gray-700 rounded  text-white py-3  hover:bg-black transition"
//               disabled={loading}
//             >
//               {loading ? "Logging In..." : "Log In"}
//             </button>
//           </form>
//           <hr />

//           <button
//             onClick={handleGoogleLogin}
//             className="w-full shadow-md flex items-center p-3 justify-center border border-gray-00 bg-gray-100 text-gray-900 hover:text-gray-100 hover:bg-black rounded transition-all duration-300"
//           >
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google Icon"
//               className="w-5 h-5 mr-2 "
//             />
//             Sign in with Google
//           </button>

//           <p className="text-center mt-4">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-500 hover:underline">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
