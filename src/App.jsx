import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Landing from "./pages/Landing";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
