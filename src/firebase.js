import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI8sVfZdOoHgQtoh7biLO2dBoMB6lr3pE",
  authDomain: "myrecipe-a7224.firebaseapp.com",
  databaseURL: "https://myrecipe-a7224.firebaseio.com",
  projectId: "myrecipe-a7224",
  storageBucket: "myrecipe-a7224.appspot.com",
  messagingSenderId: "1076001299181",
  appId: "1:1076001299181:web:cc46e2ba3012ade95b0ae4",
  measurementId: "G-KDWBHH7GB6"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
