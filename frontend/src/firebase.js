import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNhdqG556NR0j2dZHoLMZOpyJqAfFtJic",
  authDomain: "portfolio-1392a.firebaseapp.com",
  databaseURL: "https://portfolio-1392a-default-rtdb.asia-southeast1.firebasedatabase.app", // ✅ YOUR correct URL
  projectId: "portfolio-1392a",
  storageBucket: "portfolio-1392a.appspot.com",
  messagingSenderId: "121465599108",
  appId: "1:121465599108:web:a236f80648475706c23ed1",
  measurementId: "G-R7MDSRR5M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };
