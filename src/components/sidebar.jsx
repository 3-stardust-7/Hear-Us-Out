import { useState } from "react";
import { auth, signOut } from "../config/firebase"; // Import signOut from Firebase Auth
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

    const handleVer = () => {
      try {
        navigate("/verified");
      } catch (error) {
        console.error("Error going to verified:", error);
      }
    };


  const handleReg = () => {
    try {
      navigate("/register");
    } catch (error) {
      console.error("Error going to home:", error);
    }
  };

  return (
    <div
      className={`fixed border-10 rounded-4xl top-[7%] left-0 h-[90%] bg-black text-white transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? "w-64" : "w-15"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Menu Items */}
      <div className="flex-grow ">
        <ul className={` ${isOpen ? "block" : "hidden"}`}>
          <div className="py-4 mr-8 flex justify-center">
            <li
              //onClick={handleHome}
              className="hover:bg-gray-700  text-center w-full bg-gray-500 p-2 rounded-lg cursor-pointer"
            >
              Complaints
            </li>
          </div>

          <div className=" flex justify-center">
            <li
              onClick={handleReg}
              className="hover:bg-gray-700 mr-8  text-center w-full bg-gray-500 p-2 rounded-lg cursor-pointer"
            >
              Register
            </li>
          </div>

          <div className="py-4 mr-8 flex justify-center">
            <li
              onClick={handleVer}
              className="hover:bg-gray-700  text-center w-full bg-gray-500 p-2 rounded-lg cursor-pointer"
            >
              Verified
            </li>
          </div>
        </ul>
      </div>

      {/* Bottom Logout Item */}
      <div className="p-4  flex justify-center">
        <li
          className={`hover:bg-red-700 text-center w-full bg-red-500 p-2 rounded-lg cursor-pointer  ${
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
