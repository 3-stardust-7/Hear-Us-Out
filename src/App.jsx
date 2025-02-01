import React from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import Authcontext from "./context/authcontext";
const App = () => {
  return (
    <div>
      <Authcontext>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/users" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Authcontext>
    </div>
  );
};

export default App;
