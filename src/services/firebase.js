import firebase from 'firebase';
import { config } from './firebaseAuth';

firebase.initializeApp(config);
export const auth = firebase.auth;
export const realTime = firebase.database();
export const db = firebase.firestore();


