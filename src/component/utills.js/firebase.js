import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOo_YTn69Tf_8_h0ZdsjoLOTzGbszMrxY",
  authDomain: "netflix-gpt-cf025.firebaseapp.com",
  projectId: "netflix-gpt-cf025",
  storageBucket: "netflix-gpt-cf025.appspot.com",
  messagingSenderId: "921615742039",
  appId: "1:921615742039:web:28feeb56ca9ec0fe2d9f12",
  measurementId: "G-EDX5P8Z36T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);