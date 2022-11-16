import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBPa_Gyo04MJjYC3O2mFVaO8KYXYUGDQSA",
    authDomain: "money-tracker-14c97.firebaseapp.com",
    projectId: "money-tracker-14c97",
    storageBucket: "money-tracker-14c97.appspot.com",
    messagingSenderId: "382139661166",
    appId: "1:382139661166:web:7be8627aafad7e73c11f7f"
  };
// init firebase
firebase.initializeApp(firebaseConfig)
// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }