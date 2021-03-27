import firebase from 'firebase/app'
import 'firebase/database'

import config from '../config/firebase'
console.log(firebase)
firebase.initializeApp(config);

export default firebase.database();