import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1RQxC_lkQME4k_mf9WQpeRQIUTEeBO_g",
  authDomain: "lista-de-linguagens-98ccf.firebaseapp.com",
  projectId: "lista-de-linguagens-98ccf",
  storageBucket: "lista-de-linguagens-98ccf.firebasestorage.app",
  messagingSenderId: "672595418361",
  appId: "1:672595418361:web:c0bc5ae7bde75df4eb5628",
  measurementId: "G-6F3C3NE7EH"
};
const app = getApps().length > 0
? getApp()
: initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };