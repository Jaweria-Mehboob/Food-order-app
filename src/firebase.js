// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Z7EUiBxkcrp1PpfQEKLcVl1_1lUKae0",
  authDomain: "food-order-app-216cf.firebaseapp.com",
  projectId: "food-order-app-216cf",
  storageBucket: "food-order-app-216cf.appspot.com",
  messagingSenderId: "670828262182",
  appId: "1:670828262182:web:adbe0ad405467e57e0c7e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
