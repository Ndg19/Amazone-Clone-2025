import { useState, useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import amazonLogo from "../../assets/img/amazon-logo.png";

import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import ClipLoader from "react-spinners/ClipLoader";

const Auth = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  if (user) {
    return (
      <div className={styles.loggedInContainer}>
        <h2>Welcome, {user.email}</h2>
        <button onClick={handleSignOut} className={styles.signOutBtn}>
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className={styles.authContainer}>
      {/* Amazon Logo */}
      <Link to="/">
        <img src={amazonLogo} alt="Amazon Logo" className={styles.logo} />
      </Link>

      {/* Auth Form */}
      <form className={styles.authForm} onSubmit={handleAuth}>
        <h2>{isSignUp ? "Create Account" : "Sign-In"}</h2>

        <label>Email or mobile phone number</label>
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

        <button type="submit" disabled={loading}>
          {loading ? (
            <ClipLoader color="#111" size={20} />
          ) : isSignUp ? (
            "Create your Amazon account"
          ) : (
            "Sign In"
          )}
        </button>

        {error && <p className={styles.error}>{error}</p>}

        {!isSignUp && (
          <p className={styles.helpText}>
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>
            .
          </p>
        )}
      </form>

      {!isSignUp && (
        <>
          <div className={styles.divider}>
            <span>New to Amazon?</span>
          </div>

          <button
            onClick={() => setIsSignUp(true)}
            className={styles.createAccountBtn}
          >
            Create your Amazon account
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
