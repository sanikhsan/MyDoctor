// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOOlX13akNrsUErN6Zs5PjJ37Ngbk8DxQ",
  authDomain: "mydoctorexpo.firebaseapp.com",
  projectId: "mydoctorexpo",
  storageBucket: "mydoctorexpo.appspot.com",
  messagingSenderId: "76177017996",
  appId: "1:76177017996:web:286c3869668e7a9c3effa9",
  databaseURL:
    "https://mydoctorexpo-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const MyFirebase = initializeApp(firebaseConfig);
