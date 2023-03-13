import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1UAlqF9EJDCLJPuyvWDkQpkb5-X584zI",
  authDomain: "base-de-datos-87c8e.firebaseapp.com",
  projectId: "base-de-datos-87c8e",
  storageBucket: "base-de-datos-87c8e.appspot.com",
  messagingSenderId: "561354095151",
  appId: "1:561354095151:web:095de433e375acc064a4da"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};