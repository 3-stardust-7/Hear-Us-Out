import React from "react";
import Sidebar from "../components/sidebar";
import Cards from "../components/cards";

const User = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-full">
        <Cards />
      </div>
    </div>
  );
};

export default User;
