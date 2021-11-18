import react, { useState, useEffect, useRef } from "react";
import { Login, Questions } from "./routes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import moment from "moment";

const ProtectedRoutes = (props) => {
  const [time, setTime] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log("tttt")
    const loginState = localStorage.getItem("login");
    setLogin(loginState);
  },[])

  const signin = async (email, password) => {
    console.log("signin");
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.refreshToken);
        setAccessToken(user.accessToken);
        setTime(user.stsTokenManager.expirationTime);
        localStorage.setItem("login", true);
        setLogin(true);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signout = () => {
    const auth = getAuth();
    signOut(auth).then((res) => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(() => {
    const accessTokens = sessionStorage.getItem("accessToken");
    const time = sessionStorage.getItem("time");
    if (accessTokens == null) {
      console.log("accessTokenslk", time);
      //return to login
      setLogin(false);
      localStorage.setItem("login", false);
      return;
    }
    if (moment().valueOf() > time) {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("time");
      setLogin(false);
      localStorage.setItem("login", false);
    }
  }, [accessToken, time]);

 

  useEffect(() => {
    console.log("login", login);
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("time", time);
  }, [accessToken, time]);




  if (!login) {
    return <Login Signin={signin} login/>;
  } else {
    return <Questions Signout={signout} login/>;
  }
};

export default ProtectedRoutes;
