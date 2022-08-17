import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZuwE-lALfvlCEyUglb23mu9rWhPnA660",
  authDomain: "atlas-tech-cba9a.firebaseapp.com",
  projectId: "atlas-tech-cba9a",
  storageBucket: "atlas-tech-cba9a.appspot.com",
  messagingSenderId: "469292570763",
  appId: "1:469292570763:web:365301609cd60156cf5c8e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);