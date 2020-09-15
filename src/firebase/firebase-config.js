import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDrJarCnLvkJW3wB2cIoEpc4r7bwYG2FEY",
    authDomain: "react-app-cursos-4d07d.firebaseapp.com",
    databaseURL: "https://react-app-cursos-4d07d.firebaseio.com",
    projectId: "react-app-cursos-4d07d",
    storageBucket: "react-app-cursos-4d07d.appspot.com",
    messagingSenderId: "362936404211",
    appId: "1:362936404211:web:ca2ecf82a74dc2fd14cf86"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }

