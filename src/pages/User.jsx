import React from "react";
import Sidebar from "../components/sidebar";
import Cards from "../components/cards";
import Profile from "../components/profile";

const User = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
      <div className="p-4 w-full">
        <Cards />
      </div>
    </div>
  );
};

export default User;
