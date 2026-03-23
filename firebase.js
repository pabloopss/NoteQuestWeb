// firebase.js - O Coração do Jogo
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
// Repara que adicionei o getDocFromServer na linha abaixo:
import { getFirestore, doc, setDoc, getDoc, getDocFromServer, updateDoc, onSnapshot, collection, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAVNJpud6rhUHEWZxBSJ-o-8WcMtexk6yw",
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

// Adiciona o getDocFromServer aqui no final também:
export { auth, db, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, doc, setDoc, getDoc, getDocFromServer, updateDoc, onSnapshot, collection, getDocs, deleteDoc };