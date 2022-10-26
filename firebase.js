// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87934bo3U4ws1qbyAHLejfKfapFQevz4",
  authDomain: "uber-next-clone-live-745b3.firebaseapp.com",
  projectId: "uber-next-clone-live-745b3",
  storageBucket: "uber-next-clone-live-745b3.appspot.com",
  messagingSenderId: "334165911821",
  appId: "1:334165911821:web:0288d2f98f6f679d482844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }