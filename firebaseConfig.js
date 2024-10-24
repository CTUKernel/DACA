// firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Thay thế các giá trị dưới đây bằng thông tin từ Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAuDHA7Hq0gsc0I1BQeV4XldivoRq56B8o",
  authDomain: "daca-96582.firebaseapp.com",
  projectId: "daca-96582",
  storageBucket: "daca-96582.appspot.com",
  messagingSenderId: "739544746117",
  appId: "1:739544746117:web:4709117f52bfe320e4c1ec",
  measurementId: "G-Z6QQZ278HB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase };
