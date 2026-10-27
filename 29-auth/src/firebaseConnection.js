import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDA2uv9koU4XdkhyZIrKklq6MKJ7YEtLY",
    authDomain: "projetodev-15c9c.firebaseapp.com",
    databaseURL: "https://projetodev-15c9c-default-rtdb.firebaseio.com",
    projectId: "projetodev-15c9c",
    storageBucket: "projetodev-15c9c.firebasestorage.app",
    messagingSenderId: "329906170464",
    appId: "1:329906170464:web:2bc7200c4797b51929f105"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth };

