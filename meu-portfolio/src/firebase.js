// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase gerada automaticamente
const firebaseConfig = {
  apiKey: "AIzaSyDjKnosiZYqEz2wcQfc93A-hv-eYKWGISE",
  authDomain: "feedback-acbb9.firebaseapp.com",
  projectId: "feedback-acbb9",
  storageBucket: "feedback-acbb9.firebasestorage.app",
  messagingSenderId: "961221057038",
  appId: "1:961221057038:web:6daee6b2d64c4e21e2fa5f",
  measurementId: "G-103M0J2VEQ"
};

// Inicializa o app e exporta o banco de dados
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
