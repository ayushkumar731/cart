import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA52t_YtLWZUBc_QuGqdrv5Ip0gmafHR0g',
  authDomain: 'cart-ce88d.firebaseapp.com',
  databaseURL: 'https://cart-ce88d.firebaseio.com',
  projectId: 'cart-ce88d',
  storageBucket: 'cart-ce88d.appspot.com',
  messagingSenderId: '297351263896',
  appId: '1:297351263896:web:19dbd8cd805603705242ed',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
