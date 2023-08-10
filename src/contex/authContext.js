import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContex = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Ram",
      profile:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContex.Provider value={{ currentUser, login }}>
      {children}
    </AuthContex.Provider>
  );
};
