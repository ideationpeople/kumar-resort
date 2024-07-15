// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { EmailAuthProvider } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBxHqaq23UsnrqPog5KUVCVW67utlW9Uic",
//   authDomain: "unwindhotel-19f42.firebaseapp.com",
//   projectId: "unwindhotel-19f42",
//   storageBucket: "unwindhotel-19f42.appspot.com",
//   messagingSenderId: "789522862509",
//   appId: "1:789522862509:web:de7305b910b62f88cb5124",
//   measurementId: "G-YKE2WCDQTS"
// };
// // Initialize Firebase

// let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// const provider = new EmailAuthProvider();
// // const db = getFirestore(app);
// const auth = getAuth(app);

// export { provider, auth };
// // export default db;
// // const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export {db};





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxHqaq23UsnrqPog5KUVCVW67utlW9Uic",
  authDomain: "unwindhotel-19f42.firebaseapp.com",
  projectId: "unwindhotel-19f42",
  storageBucket: "unwindhotel-19f42.appspot.com",
  messagingSenderId: "789522862509",
  appId: "1:789522862509:web:de7305b910b62f88cb5124",
  measurementId: "G-YKE2WCDQTS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new EmailAuthProvider();

export { db, auth, provider };
