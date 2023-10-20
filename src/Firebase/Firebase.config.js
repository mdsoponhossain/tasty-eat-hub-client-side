// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDz2Ly0jTqsv9kxmvYakT5wPrmFYWcKM",
  authDomain: "tasty-eat-hub.firebaseapp.com",
  projectId: "tasty-eat-hub",
  storageBucket: "tasty-eat-hub.appspot.com",
  messagingSenderId: "956830426328",
  appId: "1:956830426328:web:d4433f3874f2d48cd0a3ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;