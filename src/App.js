import react, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./App.css";

import ProtectedRoutes from "./ProtectedRoutes";

function App(props) {

  const [uid, setUid] = useState(null);
  const [initialized, setInitialized] = useState(false);

  const signup = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed up as:", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };






  // const initializeFirebaseAuth = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyA_FUniyKfVaufm728VzIt7-t9q6dtd054",
      authDomain: "seds-f724e.firebaseapp.com",
      projectId: "seds-f724e", 
      storageBucket: "seds-f724e.appspot.com",
      messagingSenderId: "442488497960",
      appId: "1:442488497960:web:e1a7982f41801e690a121d",
      measurementId: "G-LCW2MYP82H",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
      
      // app.then(() => setInitialized(true));
    const analytics = getAnalytics(app);

    // setInitialized(true)
  // };

  // const ini = () => {
  //   console.log("ini");
  //   setInitialized(true);
  // }
  
  // setInitialized(true);


  useEffect(() => {
    // console.log("ccdf");
    // initializeFirebaseAuth()
    
      setInitialized(true)
      // ini();

    // signup("hasinthashehan768@gmail.com", "Shehan@53645");
    
    // signout();
  }, []);

  // const loadRoutes = () => {

  //   }else{
  //     return (
  //       <Route path="*" element={<Loading/>} />);
  //   }
  // }

  if (!initialized) {
    return (
      <>
      <Loading/>
      </>
      
    );
  }

  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="*" element={<ProtectedRoutes {...props}/>} />
          </Routes>
        </div>
      </Router>

    </ChakraProvider>
  );
}

export default App;

const Loading = () => {
  return (
    <div>Loading</div>
  );
}


