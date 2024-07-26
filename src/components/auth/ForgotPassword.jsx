import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignIn.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { resetPasswordEmail } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    resetPasswordEmail(email)
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
      <button type="submit" className={styles.button}>
        Send Email
      </button>
    </form>
  );
}

export default ForgotPassword;
