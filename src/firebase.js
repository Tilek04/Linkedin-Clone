
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCrNbXyA9BcbB8Z7uaBL7H9o_GWed73JAo",
    authDomain: "linkedin-5bd5c.firebaseapp.com",
    projectId: "linkedin-5bd5c",
    storageBucket: "linkedin-5bd5c.appspot.com",
    messagingSenderId: "562226593809",
    appId: "1:562226593809:web:5d981f65759863f35571b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}