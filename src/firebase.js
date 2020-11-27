import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3D2VA7emXoCcBTDQScuaW-kJj7bqaaGo",
  authDomain: "clone-21634.firebaseapp.com",
  databaseURL: "https://clone-21634.firebaseio.com",
  projectId: "clone-21634",
  storageBucket: "clone-21634.appspot.com",
  messagingSenderId: "396960574473",
  appId: "1:396960574473:web:9dd39d3766630175565cd8",
  measurementId: "G-2SNDFN215W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);//

const db = firebaseApp.firestore();
const auth = firebase.auth();//handle the singIn

export { db, auth };

