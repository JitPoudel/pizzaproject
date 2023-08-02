import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { auth, provider } from "../firebase";

export function useFirebaseLogin() {
  const [authenticated, setAuthenticated] = useState();

  function logout() {
    auth
      .signOut()
      .then(function () {
        console.log("signout"); // Log-out succesful
      })
      .catch(function (error) {
        // Error logging out
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged(
      function (user) {
        if (user) {
          setAuthenticated(user);
        } else {
          setAuthenticated();
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    try {
      setError("");
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err.message);
      setError("Problem when signing in with Google.");
    }
  };

  const loginEmailPassword = async () => {
    const loginEmail = email;
    const loginPassword = password;
    try {
      setError("");
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch {
      setError(
        "Failed to sign in. Make sure your email and password are correct."
      );
    }
  };

  const createAccount = async () => {
    const loginEmail = email;
    const loginPassword = password;
    try {
      setError("");
      await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch {
      setError(
        "Failed to create account. Make sure your password is long enough."
      );
    }
  };

  return {
    loginWithGoogle,
    email,
    password,
    setEmail,
    setPassword,
    loginEmailPassword,
    createAccount,
    logout,
    loggedIn: authenticated,
    error,
    setError,
  };
}
