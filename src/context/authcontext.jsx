import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supa-client";

export const Auth = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        if (!session?.user) navigate("/login"); // Redirect to login after logout
      }
    );

    checkUser();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  // ✅ Logout function
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null); // Clear user state
    navigate("/login"); // Redirect to login page
  };

  return (
    <Auth.Provider value={{ user, setUser, logout }}>{children}</Auth.Provider>
  );
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
