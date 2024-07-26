import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPasswordEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const resetPassword = (code, password) => {
    return confirmPasswordReset(auth, code, password);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return listen;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPasswordEmail,
    resetPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
