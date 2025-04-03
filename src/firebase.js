import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import Storage
import { getDatabase } from "firebase/database"; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDL6YOey0NFtqxGKwMwrb9C2xO3eur5y8E",
  authDomain: "hackt-6c946.firebaseapp.com",
  databaseURL:
    "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackt-6c946",
  storageBucket: "hackt-6c946.appspot.com",
  messagingSenderId: "827135020518",
  appId: "1:827135020518:web:32ea07a4ce2828a6041a27",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, database };
