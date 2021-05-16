import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyDecKHQJYMd6PIV1i5qjqzUHm11P8mxeNI",
  authDomain: "ecommerce-loreipsum.firebaseapp.com",
  projectId: "ecommerce-loreipsum",
  storageBucket: "ecommerce-loreipsum.appspot.com",
  messagingSenderId: "131532878410",
  appId: "1:131532878410:web:c6c91fd504119a8c7dacb3",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
