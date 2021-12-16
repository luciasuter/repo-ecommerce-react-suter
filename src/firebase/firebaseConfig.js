import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAy1KPEH4fwJM89gc_voHQHNPkfjN5fX2A",
  authDomain: "react-js-7cc74.firebaseapp.com",
  projectId: "react-js-7cc74",
  storageBucket: "react-js-7cc74.appspot.com",
  messagingSenderId: "667698047187",
  appId: "1:667698047187:web:8ee199e6c6dbeda987cc26",
  measurementId: "G-ENGZVDY1Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);