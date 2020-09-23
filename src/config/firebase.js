import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fir-react-bitfumes.firebaseapp.com",
    databaseURL: "https://fir-react-bitfumes.firebaseio.com",
    projectId: "fir-react-bitfumes",
    storageBucket: "fir-react-bitfumes.appspot.com",
    messagingSenderId: "542425840772",
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
