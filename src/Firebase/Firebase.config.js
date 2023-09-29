// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTClGfmA8Tg8X_zunOx7yxb-M07nFUNL0",
  authDomain: "router-shop-6e621.firebaseapp.com",
  projectId: "router-shop-6e621",
  storageBucket: "router-shop-6e621.appspot.com",
  messagingSenderId: "150550968324",
  appId: "1:150550968324:web:394f0ffee6bd86b05d9d51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
