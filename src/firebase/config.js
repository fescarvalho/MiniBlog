// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKU8JlF41eSgwXof7KXJofm1aPtn0YdwQ',
  authDomain: 'miniblog-30957.firebaseapp.com',
  projectId: 'miniblog-30957',
  storageBucket: 'miniblog-30957.appspot.com',
  messagingSenderId: '792117511805',
  appId: '1:792117511805:web:f552f0ceef172ba0219314',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize DB Firebase
const db = getFirestore(app);

export { db };
