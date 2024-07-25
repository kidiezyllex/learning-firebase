import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAaXu7kerp-dA6xCn9XTKmRZmLqJsLrDUM",
  authDomain: "learning-firebase-41fe7.firebaseapp.com",
  projectId: "learning-firebase-41fe7",
  storageBucket: "learning-firebase-41fe7.appspot.com",
  messagingSenderId: "227971277579",
  appId: "1:227971277579:web:0f04fb8d31e2ee31ebb80e",
  measurementId: "G-S9M2V5LJ1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Init service
export const db = getFirestore(app);
