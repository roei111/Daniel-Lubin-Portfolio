import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_h4ak00lnNeL-a8RCtkQemRyOE5fPmFU",
  authDomain: "daniel-lubin-portfolio.firebaseapp.com",
  projectId: "daniel-lubin-portfolio",
  storageBucket: "daniel-lubin-portfolio.appspot.com",
  messagingSenderId: "733336300756",
  appId: "1:733336300756:web:c68c2e927f2b18840f9f41"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
