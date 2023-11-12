//import firebase from "firebase/compat/app"; // Before: version 8
//import "firebase/auth";                     // Before: version 8 (firebase 인증모듈 사용을 위한 import)
import firebase from "firebase/compat/app";   // After : version 9
import "firebase/compat/auth";                // After : version 9 (firebase 인증모듈 사용을 위한 import)

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}; 

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth(); // 다른 파일에서 참조할 것이므로 export 함
