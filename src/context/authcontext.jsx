import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const Auth = createContext(); 

const Authcontext = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, [auth]);

  return <Auth.Provider value={[user, setUser]}>{children}</Auth.Provider>;
};

export default Authcontext; //  Now correctly defined and exported

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
