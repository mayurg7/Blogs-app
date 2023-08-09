import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-vbuXeKRuYIk5uK9-cvy65EBsWAlZKQ",
  authDomain: "blogs-app-de8f9.firebaseapp.com",
  projectId: "blogs-app-de8f9",
  storageBucket: "blogs-app-de8f9.appspot.com",
  messagingSenderId: "588229407975",
  appId: "1:588229407975:web:8741600481197aac725e42",
  measurementId: "G-B0N65E5SW5"
  };

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};