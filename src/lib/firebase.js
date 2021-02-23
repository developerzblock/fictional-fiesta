import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBiYJk9RHEOg_Wu87dqDvdCsM5VDkN4Qcs",
    authDomain: "react--ig.firebaseapp.com",
    databaseURL: "https://react--ig-default-rtdb.firebaseio.com",
    projectId: "react--ig",
    storageBucket: "react--ig.appspot.com",
    messagingSenderId: "634645679238",
    appId: "1:634645679238:web:a4f8efc98c5365d5619507"
};

const firebase = window.firebase.initializeApp(config);
// Allows us to make modifications to data in the firebase
// Array Methods, array.move array.union
const { FieldValue } = window.firebase.firestore;

// Only do this once, comment out or there will be duplicates!
seedDatabase(firebase);

export { firebase, FieldValue };