
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOM",
  projectId: "YOUR_ID",
  storageBucket: "BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)