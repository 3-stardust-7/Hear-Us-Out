import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
