import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAlgC7rnQTJrgqJ9u2PmAeSS0CsjXghQPg",
  authDomain: "edgarelgato-6cf86.firebaseapp.com",
  projectId: "edgarelgato-6cf86",
  storageBucket: "edgarelgato-6cf86.appspot.com",
  messagingSenderId: "960251992617",
  appId: "1:960251992617:web:8c2fba6b4b0c7e01de5a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)