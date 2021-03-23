import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "API KEY",
    authDomain: "AUTH DOMAIN",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGING SENDER ID",
    appId: "APP ID",
    measurementId: "MEASUREMENT ID"
})

const db = firebaseApp.firestore();

export default db;
