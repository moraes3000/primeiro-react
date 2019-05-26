const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
     // Your web app's Firebase configuration

    apiKey: "AIzaSyCx1czKoxmPHvBRL2QNigqId8OpFgbZLp4",
    authDomain: "moraes-portfolio.firebaseapp.com",
    databaseURL: "https://moraes-portfolio.firebaseio.com",
    projectId: "moraes-portfolio",
    storageBucket: "moraes-portfolio.appspot.com",
    messagingSenderId: "491040167893",
    appId: "1:491040167893:web:ae2fb00a2170bbc8"
  }


  const app =  firebase.initializeApp(FirebaseConfig)

  const config = Rebase.createClass(app.database())

export default config