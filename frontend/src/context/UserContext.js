import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const userFromStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userFromStorage ? userFromStorage : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
