import React from "react";
import Sidebar from "../components/sidebar";
import Cards from "../components/Cards";
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
      <div className="relative  z-50">
        <Sidebar />
      </div>
      <div className=" p-4 lg:w-2/3 sm:w-5/6 m-auto">
        <Cards />
      </div>
    </div>
  );
};

export default User;

