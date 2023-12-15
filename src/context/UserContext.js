import React, { useState, createContext } from "react";
import avatar from "../assets/default_avatar.jpg";

// const testUser = {
//   avatar,
//   username: 'test name',
//   fullname: 'test fullname',
//   _id: '0',
//   isFollowing: false,
// }

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
