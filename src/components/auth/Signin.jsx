import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignIn.module.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const history = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        history("/");
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
        Sign In
      </button>
    </form>
  );
}

export default SignIn;
