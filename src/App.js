
import react, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import './App.css';
import { Questions } from "./components"
var axios = require('axios');

function App() {


  const signup = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


  const initializeFirebaseAuth = () => {
    // Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBhVZreZNiwbjeFI5Fa_iMB7vMNqXaIEdY",
      authDomain: "seds-332415.firebaseapp.com",
      projectId: "seds-332415",
      storageBucket: "seds-332415.appspot.com",
      messagingSenderId: "443396178839",
      appId: "1:443396178839:web:ccce23c8c7f3e0883b7ad2",
      measurementId: "G-97Z9PPQNBD"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }


  useEffect(() => {
    initializeFirebaseAuth();
  }, []);

  return (

    <ChakraProvider>


      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


        <Questions />

      </div>

    </ChakraProvider>
  );
}

export default App;
