import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<User />} />
      </Routes>
    </>
  );
};

export default App;
