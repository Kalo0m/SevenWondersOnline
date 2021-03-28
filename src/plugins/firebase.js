import firebase from "firebase/app";
import "firebase/firestore";

import config from "../config/firebase";
console.log(firebase);
firebase.initializeApp(config);

export default firebase.firestore();
