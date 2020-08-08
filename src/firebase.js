import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDwvIFfHMJIYwMnGOHm4iR8T4QMYfatGXM",
    authDomain: "add-media-72eeb.firebaseapp.com",
    databaseURL: "https://add-media-72eeb.firebaseio.com",
    projectId: "add-media-72eeb",
    storageBucket: "add-media-72eeb.appspot.com",
    messagingSenderId: "303063971543",
    appId: "1:303063971543:web:55b12877eda75e223a6292",
    measurementId: "G-YXG92FCQES"
}

const fire = firebase.initializeApp(config);
export default fire;

// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDwvIFfHMJIYwMnGOHm4iR8T4QMYfatGXM",
//     authDomain: "add-media-72eeb.firebaseapp.com",
//     databaseURL: "https://add-media-72eeb.firebaseio.com",
//     projectId: "add-media-72eeb",
//     storageBucket: "add-media-72eeb.appspot.com",
//     messagingSenderId: "303063971543",
//     appId: "1:303063971543:web:55b12877eda75e223a6292",
//     measurementId: "G-YXG92FCQES"
// })

// const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };