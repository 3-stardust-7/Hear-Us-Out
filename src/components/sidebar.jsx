import { useState } from "react";
//import { auth, signOut } from "../config/firebase"; // Import signOut from Firebase Auth
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate(); // useNavigate for page redirection

  const handleMouseEnter = () => {
    setIsOpen(true);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsOpen(false), 3000);
    setTimeoutId(id);
  };

  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth);
      console.log("User logged out successfully");
      // Redirect to login page
      navigate("/login"); // or to any other page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // const handleHome=()=>{
  //   try {
  //      navigate("/");
  //   } catch (error) {
  //      console.error("Error going to home:", error);
  //   }
  // }

  const handleReg = () => {
    try {
      navigate("/register");
    } catch (error) {
      console.error("Error going to home:", error);
    }
  };

  return (
    <div
      className={`fixed border-10 rounded-4xl top-[7%] left-0 h-[90%] bg-blue-300 text-white transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? "w-64" : "w-15"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Menu Items */}
      <div className="flex-grow p-4">
        <ul className={`mt-4 space-y-2 ${isOpen ? "block" : "hidden"}`}>
          <li
            //onClick={handleHome}
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Home
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Fulfilled
          </li>
          <li
            onClick={handleReg}
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Register
          </li>
        </ul>
      </div>

      {/* Bottom Logout Item */}
      <div className="p-4">
        <li
          className={`hover:bg-red-600 p-2 rounded cursor-pointer  ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleLogout} // Trigger logout on click
        >
          Logout
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
