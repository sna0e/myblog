import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCo-dMZh5lFDZ7Gqcu5QIQGOKpdS565gGk",
    authDomain: "myblog-1bff1.firebaseapp.com",
    projectId: "myblog-1bff1",
    storageBucket: "myblog-1bff1.appspot.com",
    messagingSenderId: "1061342553290",
    appId: "1:1061342553290:web:bb681270869fbabc450033"
};
  
  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const authService = firebase.auth() 

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();

