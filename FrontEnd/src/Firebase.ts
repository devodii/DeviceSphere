import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
   apiKey: "AIzaSyBGKhqXyGrXk4X7Buxtfom0xgPjHk5eJVQ",
   authDomain: "chacho-gadget.firebaseapp.com",
   projectId: "chacho-gadget",
   storageBucket: "chacho-gadget.appspot.com",
   messagingSenderId: "388376492142",
   appId: "1:388376492142:web:8059fdd3adb12f09634e7f",
   measurementId: "G-B91QTR4P8H",
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();

export {db, firebase as default};
