import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
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
