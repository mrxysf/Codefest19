var firebaseConfig = {
  apiKey: "AIzaSyD3dGIAvZtlRuXt8Urvo7fsMfAOY3GZEHU",
  authDomain: "sharingiscaring-1aef9.firebaseapp.com",
  databaseURL: "https://sharingiscaring-1aef9.firebaseio.com",
  projectId: "sharingiscaring-1aef9",
  storageBucket: "sharingiscaring-1aef9.appspot.com",
  messagingSenderId: "678715495796",
  appId: "1:678715495796:web:1520b4b1581248cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
