import React, { useState } from "react";
import firebase from "firebase/app";

function SignIn(){  

  const [ successMsg, setSuccessMsg ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState(''); 

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        setSuccessMsg("successfully signed in!");
        console.log("Successfully signed in!");
      })
      .catch(function (error) {
        setErrorMsg(error.message);
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn;
