import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQCnWeL6BuIACZzkF_8XEAo73oy69zciA",
    authDomain: "react-todo-app-2be32.firebaseapp.com",
    projectId: "react-todo-app-2be32",
    storageBucket: "react-todo-app-2be32.appspot.com",
    messagingSenderId: "511920548226",
    appId: "1:511920548226:web:03970f77b05c75e32e079b",
    measurementId: "G-8MS9VJ3KPS"
})

const db = firebaseApp.firestore();

export default db;