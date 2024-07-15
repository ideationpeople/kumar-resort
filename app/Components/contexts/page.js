// src/contexts/AuthContext.js
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
