import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import Layout from './components/Layout';
import './index.css';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJ6hNd5qCDB5RRUsURid843O3mUeuwcgY",
    authDomain: "balochistan-encyclopedia.firebaseapp.com",
    databaseURL: "https://balochistan-encyclopedia.firebaseio.com",
    projectId: "balochistan-encyclopedia",
    storageBucket: "balochistan-encyclopedia.appspot.com",
    messagingSenderId: "533324552329"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
