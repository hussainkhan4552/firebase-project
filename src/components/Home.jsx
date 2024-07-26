import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import styles from "./auth/SignIn.module.css";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  const signOutHandler = () => {
    logout()
      .then(() => {
        console.log("successfully signed out");
        history("/signin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      email: {currentUser && currentUser.email}
      <button type="button" className={styles.button} onClick={signOutHandler}>
        Sign Out
      </button>
    </div>
  );
};

export default Home;
