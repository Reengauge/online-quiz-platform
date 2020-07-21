import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import * as c from '../../constants';

// const firebaseConfig = {
//     apiKey: c.REACT_APP_FIREBASE_KEY,
//     authDomain: c.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: c.REACT_APP_FIREBASE_DATABASE,
//     projectId: c.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: c.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: c.REACT_APP_FIREBASE_SENDER_ID,
//     appId: c.REACT_APP_FIREBASE_APP_ID,
//     measurementId: c.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: 'AIzaSyCstd06q0sDMKezaUxePgHqkT3MlPN6N-Q',
    authDomain: 'summer20-sps-8.firebaseapp.com',
    databaseURL: 'https://summer20-sps-8.firebaseio.com',
    projectId: 'summer20-sps-8',
    storageBucket: 'summer20-sps-8.appspot.com',
    messagingSenderId: '499742742494',
    appId: '1:499742742494:web:39290693bf54c7472eaf4f',
    measurementId: 'G-D9MWJECBVS',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
