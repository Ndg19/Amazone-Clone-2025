import LayOut from '../../components/LayOut/LayOut'
import { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp:", { email, password });
    // Add sign-up logic here
  };

  return (
    <LayOut>
      <div className={styles.signUpContainer}>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </LayOut>
  );
};

export default SignUp;


