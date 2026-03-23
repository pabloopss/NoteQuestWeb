// firebase.js - O Coração do Jogo
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, onSnapshot, collection, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAVNJpud6rhUHEWZxBSJ-o-8WcMtexk6yw", // Confirme se é essa mesma!
    authDomain: "notequestweb.firebaseapp.com",
    projectId: "notequestweb",
    storageBucket: "notequestweb.firebasestorage.app",
    messagingSenderId: "1062376453055",
    appId: "1:1062376453055:web:f06d234ff7b194dcf4670a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, doc, setDoc, getDoc, updateDoc, onSnapshot, collection, getDocs, deleteDoc };