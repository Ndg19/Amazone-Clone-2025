import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDauLWgkcCcV2uAFrKTaevSn8bKPjvU3j8",
  authDomain: "clone-b500d.firebaseapp.com",
  projectId: "clone-b500d",
  storageBucket: "clone-b500d.appspot.com",
  messagingSenderId: "123912675831",
  appId: "1:123912675831:web:c6c175bd693bcc62a0cef2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
