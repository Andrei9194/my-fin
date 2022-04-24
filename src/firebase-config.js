import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAh7Uwe8tEwZq-I41sNTvzAWMC2YlKiEjo",
    authDomain: "my-fin-14055.firebaseapp.com",
    projectId: "my-fin-14055",
    storageBucket: "my-fin-14055.appspot.com",
    messagingSenderId: "845024048968",
    appId: "1:845024048968:web:dc547de99ce11d23bfa57d"
  };

  const app = initializeApp(firebaseConfig);

  export const DATABASE_URL = 'https://my-fin-14055-default-rtdb.europe-west1.firebasedatabase.app/'

  export default getFirestore()