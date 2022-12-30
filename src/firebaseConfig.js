import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAZauZlgNy0PFYsI2kQJqLdsIgrZDWGH4",
  authDomain: "danbulcrm2.firebaseapp.com",
  projectId: "danbulcrm2",
  storageBucket: "danbulcrm2.appspot.com",
  messagingSenderId: "1090630411600",
  appId: "1:1090630411600:web:6910adcc77b2af89363855",
  measurementId: "G-NG5RBPKH3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
