import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0asnaJRFScsM4HsBpgjCN1iBPXelfOjo",
  authDomain: "site-post-firebase.firebaseapp.com",
  projectId: "site-post-firebase",
  storageBucket: "site-post-firebase.appspot.com",
  messagingSenderId: "463722624920",
  appId: "1:463722624920:web:432f331af9c5140ea1dded",
  measurementId: "G-6D7JMLS1RJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
