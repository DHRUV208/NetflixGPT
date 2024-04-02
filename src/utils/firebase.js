// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGiC8QwIyZtRqlPbBLVcO14ih-kdeudS0",
  authDomain: "netflix-gpt-5f8aa.firebaseapp.com",
  projectId: "netflix-gpt-5f8aa",
  storageBucket: "netflix-gpt-5f8aa.appspot.com",
  messagingSenderId: "361535274947",
  appId: "1:361535274947:web:5fb1dd3f5e1a1fe7f70776",
  measurementId: "G-9C518NR4XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();