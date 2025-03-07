import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supa-client"; // Import Supabase client

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsOpen(false), 3000);
    setTimeoutId(id);
  };

  // ✅ Logout Function (Using Supabase)
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      console.log("User logged out successfully");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // ✅ Navigation Handlers
  const handleVer = () => navigate("/verified");
  const handleReg = () => navigate("/register");

  return (
    <div
      className={`fixed border-10 rounded-4xl top-[7%] left-0 h-[90%] bg-black text-white transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? "lg:w-64 sm:w-44 " : "lg:w-15 sm:w-10"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Menu Items */}
      <div className="flex-grow">
        <ul className={`${isOpen ? "block" : "hidden"}`}>
          <div className="py-4 mr-8 flex justify-center">
            <li className="hover:bg-gray-700 text-center w-full bg-gray-500 p-2 rounded-lg cursor-pointer">
              Complaints
            </li>
          </div>

          <div className="flex justify-center">
            <li
              onClick={handleReg}
              className="hover:bg-gray-700 mr-8 text-center w-full bg-gray-500 p-2 rounded-lg cursor-pointer"
            >
              Register
            </li>
          </div>

          <div className="py-4 mr-8 flex justify-center">
            <li
              onClick={handleVer}
              className="hover:bg-gray-700 text-center w-full bg-gray-500 p-2 rounded-lg cursor-pointer"
            >
              Verified
            </li>
          </div>
        </ul>
      </div>

      {/* Bottom Logout Item */}
      <div className="p-4 flex justify-center">
        <li
          className={`hover:bg-red-700 text-center w-full bg-red-500 p-2 rounded-lg cursor-pointer ${
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
