import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignIn.module.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const { resetPassword } = useAuth();
  const history = useNavigate();

  const useQuery = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
  };

  const query = useQuery();

  function handleSubmit(event) {
    event.preventDefault();
    resetPassword(query.get("oobCode"), password)
      .then((userCredentials) => {
        console.log(userCredentials);
        history("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
        Reset Password
      </button>
    </form>
  );
}

export default ResetPassword;
