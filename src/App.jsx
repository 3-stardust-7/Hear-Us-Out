import React from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import Authcontext from "./context/authcontext";
const App = () => {
  return (
    <div>
      <Authcontext>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/users" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Authcontext>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route, useNavigate, Navigate } from "react-router-dom"; // Import Navigate for redirection
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import User from "./pages/User";
// //import Register from "./pages/Register";
// //import NGO from "./pages/ngo"; // Assuming you have a page for NGO users
// //import { useAuth } from "./context/authcontext"; // Assuming your auth context provides user details
// import { useAuth } from "./context/authcontext";

// const App = () => {
//   const { user, loading } = useAuth(); // Assuming you get the logged-in user from the context
//   const [userType, setUserType] = useState(null); // For storing the user type ("User" or "NGO")
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       // If a user is logged in, get their user type (NGO or User)
//       setUserType(user.user_type); // Assuming `user.user_type` contains either "User" or "NGO"

//       // Navigate based on user type
//       if (user.user_type === "NGO") {
//         navigate("/ngo"); // Redirect to NGO page
//       } else if (user.user_type === "User") {
//         navigate("/users"); // Redirect to User page
//       }
//     }
//   }, [user, navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state while checking user authentication status
//   }

//   return (
//     <div>
//       <AuthProvider>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Landing />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           {/* <Route path="/register" element={<Register />} /> */}

//           {/* Protected Routes */}
//           {/* Redirect to Login if no user is logged in */}
//           <Route
//             path="/users"
//             element={user ? <User /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/ngo"
//             element={
//               user && user.user_type === "NGO" ? (
//                 <NGO />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

//           {/* Redirect to Login for unknown routes */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </AuthProvider>
//     </div>
//   );
// };

// export default App;
