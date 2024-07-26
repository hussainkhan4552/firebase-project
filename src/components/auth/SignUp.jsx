import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignIn.module.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    signup(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label className={styles.label}>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <button type="submit" className={styles.button}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
