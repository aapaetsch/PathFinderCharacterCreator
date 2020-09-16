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
    await auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then( (res) => {
      if (res.credential){
        const token = res.credential.accessToken;
        return token;
      }
    }).catch( (err) => {
      console.log(err);
      return false;
    })

  } catch (error) {
    console.log(error);
    return false;
  }
}

