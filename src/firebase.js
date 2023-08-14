import { initializeApp } from "firebase/app";

// Firebase Firestore functions
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";

// Firebase storage functions
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeXE8U-DRVfR2VV6auAfrkwZ6RysE7zYY",
  authDomain: "vue-e-store.firebaseapp.com",
  projectId: "vue-e-store",
  storageBucket: "vue-e-store.appspot.com",
  messagingSenderId: "215102641706",
  appId: "1:215102641706:web:35e2f47d741cbfef965553",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  collection,
  getDocs,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  doc,
  getDoc,
};
