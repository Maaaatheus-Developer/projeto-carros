import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmU1DJZaTUfXZmRmXjN7BU6sKIsodC7D8",
  authDomain: "onfitness-fb.firebaseapp.com",
  projectId: "onfitness-fb",
  storageBucket: "onfitness-fb.appspot.com",
  messagingSenderId: "45581783939",
  appId: "1:45581783939:web:2d204a2f871aa3381e1cb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, auth, storage };
