// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_DATABASE_URL}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database };
