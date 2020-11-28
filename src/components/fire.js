import firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyDpphtzvIGpjfktUuJw0FwRFoSALH2JMKU",
    authDomain: "gocoronadoc.firebaseapp.com",
    databaseURL: "https://gocoronadoc.firebaseio.com",
    projectId: "gocoronadoc",
    storageBucket: "gocoronadoc.appspot.com",
    messagingSenderId: "229428555751",
    appId: "1:229428555751:web:b0290e8f4fd1565a5b5742"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
