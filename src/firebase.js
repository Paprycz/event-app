
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB0XZIHJwiaMNSebAO4LChlsM6P2kfjiVU",
  authDomain: "event-app-backend.firebaseapp.com",
  projectId: "event-app-backend",
  storageBucket: "event-app-backend.appspot.com",
  messagingSenderId: "698099096109",
  appId: "1:698099096109:web:13f84a4570437c853fb6a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)