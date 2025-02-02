import React from "react";
import Sidebar from "../components/sidebar";
import Cards from "../components/Cards";
import Profile from "../components/profile";
import w from "../assets/w.png"

const User = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center "
      style={{
        backgroundImage: `url(${w})`,
        backgroundColor: "rgba(255, 255, 255, 0.25)", // Transparent white overlay
        backgroundBlendMode: "overlay", // Combine the image and color
      }}
    >
      <Sidebar />
      <div className="">
        <Profile />
      </div>
      <div className="p-4 w-2/3 mx-auto">
        <Cards />
      </div>
    </div>
  );
};

export default User;

