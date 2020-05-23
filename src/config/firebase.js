//import * as firebase from "firebase";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDkx9fyE70VJEV6QXlCvS4HPlKGxO-wCIg",
    authDomain: "egaeus-75c1e.firebaseapp.com",
    databaseURL: "https://egaeus-75c1e.firebaseio.com",
    projectId: "egaeus-75c1e",
    storageBucket: "egaeus-75c1e.appspot.com",
    messagingSenderId: "879335604213",
    appId: "1:879335604213:web:f2f01b18398ead1f49aabc"
};
export const db = firebase.initializeApp(firebaseConfig);
export const storage = firebase.app().storage("gs://egaeus-75c1e.appspot.com");
export const storageRef = storage.ref();
export default  db;