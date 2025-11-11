// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4yB9i1mOukIhKf-1TnX-bV_Py-dns0UQ",
  authDomain: "a10-client-d76cc.firebaseapp.com",
  projectId: "a10-client-d76cc",
  storageBucket: "a10-client-d76cc.firebasestorage.app",
  messagingSenderId: "714374849199",
  appId: "1:714374849199:web:9f7294237a44fd3cc02a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
