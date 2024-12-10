const { initializeApp } = require("firebase/app");

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBIOA4EzLWRXvyDfAvMcN8Im4xGyi9Xueg",
    authDomain: "futurate-c242-ps489.firebaseapp.com",
    projectId: "futurate-c242-ps489",
    storageBucket: "futurate-c242-ps489.firebasestorage.app",
    messagingSenderId: "352594405825",
    appId: "1:352594405825:web:2d0c36fd3e222917df2740"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
