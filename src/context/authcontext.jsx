import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import useLocation
import supabase from "../supa-client";
import { FaSpinner } from "react-icons/fa"; 

export const Auth = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current page location

  useEffect(() => {
    console.log("Checking authentication...");

    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log("Session Data:", session);

      if (session?.user) {
        setUser(session.user);
      }
      setLoading(false);
    };
    

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("Auth State Changed:", session);
        setUser(session?.user || null);

        // ✅ Only redirect if the user is trying to access a protected page
        const protectedRoutes = ["/users", "/verified"];
        if (!session?.user && protectedRoutes.includes(location.pathname)) {
          navigate("/login");
        }
      }
    );

    checkUser();

    return () => authListener?.unsubscribe?.();
  }, [navigate, location]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-gray-700" />
      </div>
    );
  }

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export default AuthContextProvider;

//Krish code
// import React, { createContext, useState } from "react";

// export const Auth = createContext();

// const Authcontext = ({ children }) => {
//   const [user, setUser] = useState(null);
//   return <Auth.Provider value={[user, setUser]}>{children}</Auth.Provider>;
// };

// export default Authcontext;

//The correct code below

// import React, { createContext, useState, useContext, useEffect } from "react";

// // Create context
// export const Auth = createContext();

// // Provide context
// const Authcontext = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Simulate fetching user data from Supabase or Firebase
//     const fetchedUser = { id: 1, name: "John Doe", role: "User" }; // Simulated user object
//     setUser(fetchedUser);
//   }, []);

//   return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
// };

// // Custom hook to access the auth context
// export const useAuth = () => {
//   const context = useContext(Auth);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default Authcontext;
