import React, { createContext, useState } from "react";

export const Auth = createContext();

const Authcontext = ({ children }) => {
  const [user, setUser] = useState(null);
  return <Auth.Provider value={[user, setUser]}>{children}</Auth.Provider>;
};

export default Authcontext;
