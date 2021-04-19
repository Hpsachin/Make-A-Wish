/* eslint-disable */
// import { firebase } from '@firebase/app'
// import "firebase/database"
//  var firebaseConfig = {
//     apiKey: "AIzaSyAETRAt3dNi0hp7lKuvDr6wHsTzy1179ps",
//     authDomain: "firevuechat-b2dd7.firebaseapp.com",
//     projectId: "firevuechat-b2dd7",
//     storageBucket: "firevuechat-b2dd7.appspot.com",
//     messagingSenderId: "321114998762",
//     appId: "1:321114998762:web:44d40915e1eb86c7ebd493"
//   };
//  const db = firebase.initializeApp(firebaseConfig)
//  export default db;
// import * as firebase from 'firebase'
import { firebase } from '@firebase/app'
import 'firebase/firestore';
var firebaseConfig = {
      apiKey: "AIzaSyAETRAt3dNi0hp7lKuvDr6wHsTzy1179ps",
      authDomain: "firevuechat-b2dd7.firebaseapp.com",
      projectId: "firevuechat-b2dd7",
      storageBucket: "firevuechat-b2dd7.appspot.com",
      messagingSenderId: "321114998762",
      appId: "1:321114998762:web:44d40915e1eb86c7ebd493"
    };
     firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore()
    export default  db