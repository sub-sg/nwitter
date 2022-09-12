//import firebase from "firebase/compat/app"; // Before: version 8
import firebase from "firebase/compat/app";   // After : version 9

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);
