import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDFJjHddIrb9nzePoDRnn1K_B6GlGX1Slk',
  authDomain: 'react-hooks-blog-7d43f.firebaseapp.com',
  projectId: 'react-hooks-blog-7d43f',
  storageBucket: 'react-hooks-blog-7d43f.appspot.com',
  messagingSenderId: '578244015991',
  appId: '1:578244015991:web:6ae3ae30c38fe3cb1f9372',
  measurementId: 'G-MMBJELSNMT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = firebase.firestore