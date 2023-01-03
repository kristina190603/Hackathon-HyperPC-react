import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy00aNHF8GbLgPTJZUGHBmcCGIIKcnAr4",
  authDomain: "hyperpc-6940c.firebaseapp.com",
  projectId: "hyperpc-6940c",
  storageBucket: "hyperpc-6940c.appspot.com",
  messagingSenderId: "364640972034",
  appId: "1:364640972034:web:26bf9106d6dcad9132e61b",
  measurementId: "G-V7TGNQGY4M"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;