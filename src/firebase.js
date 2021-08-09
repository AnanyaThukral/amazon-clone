import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyTyZwCy51ZDItpEqvdgOr-HpMkemQ3QQ",
    authDomain: "clone-e5f29.firebaseapp.com",
    projectId: "clone-e5f29",
    storageBucket: "clone-e5f29.appspot.com",
    messagingSenderId: "218986688023",
    appId: "1:218986688023:web:89919c1461d96e50cfb652",
    measurementId: "G-V1DLZJTP4W"
});

const db = firebase.firestore()

export default db