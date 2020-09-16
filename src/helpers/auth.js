import { auth } from '../services/firebase';
import firebase from 'firebase';
import { Toast } from '@ant-design/react-native';

export async function signup(email, password) {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);

  } catch(error) {
    console.log(error);
    return false;
  }
}

export async function signin(email, password) {
  try {
    return await auth().signInWithEmailAndPassword(email, password);

  } catch(error) {
    console.log(error);
    return false;
  }
}

export async function signInWithProvider(providerName) {
  let provider;
  switch(providerName) {

    case 'goog':
      provider = new auth.GoogleAuthProvider();
      break;

    case 'git':
      provider = new auth.GithubAuthProvider();
      break;

    default:
      provider = null;
      break;
  }

  try {
    return await auth().signInWithPopup(provider);

  } catch (error) {
    console.log(error);
    return false;
  }
}

