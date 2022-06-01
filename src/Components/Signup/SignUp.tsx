import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [notChecked, setNotChecked] = useState<boolean>(true);
  const [signedUp, setSignedUp] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputUserNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);
  const checkTermsHandler = () => {
    setNotChecked(!notChecked);
  };
  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputEmailRef.current!.value.trim().length === 0) {
      setFailed(true);
    } else if (inputNameRef.current!.value.trim().length === 0) {
      setFailed(true);
    } else if (inputPasswordRef.current!.value.trim().length <= 6) {
      setFailed(true);
    }
    const raw = JSON.stringify({
      name: inputNameRef.current?.value,
      email: inputEmailRef.current?.value,
      password: inputPasswordRef.current?.value,
      username: inputUserNameRef.current?.value,
      avatar:
        'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png',
    });
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions: any = {
      method: 'POST',
      redirect: 'follow',
      body: raw,
      headers: myHeaders,
    };
    fetch('http://localhost:5000/api/users', requestOptions)
      .then((response) => response.json())
      .then(() => {
        setSignedUp(true);
      })
      .catch(() => {
        setFailed(true);
        setSignedUp(false);
      });
  };

  return (
    <div className="sign-up-main-container">
      {signedUp && <Navigate to="/" />}
      <img
        src="https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735"
        alt=""
        className="left-image-signup"
      />

      <div className="sign-up-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          id="logo-signup"
          alt=""
        />
        <form className="sign-up-form-container" onSubmit={signUpHandler}>
          <input
            required
            ref={inputEmailRef}
            placeholder="Enter your email address"
            type="email"
            className="input-sign-up"
          />
          <input
            required
            ref={inputNameRef}
            placeholder="Enter your name"
            type="text"
            className="input-sign-up"
          />
          <input
            required
            ref={inputUserNameRef}
            placeholder="Pick a username"
            type="text"
            className="input-sign-up"
          />
          <input
            required
            ref={inputPasswordRef}
            placeholder="Password"
            type="Password"
            className="input-sign-up password"
          />
          <input
            required
            ref={inputConfirmPasswordRef}
            placeholder="Confirm Password"
            type="password"
            className="input-sign-up"
          />
          <button type="submit" className="sign-up-btn">
            Sign up
          </button>
        </form>
        <p className="terms-and-conditions">
          <button
            aria-label="Save"
            type="button"
            className={
              !notChecked ? 'icon-sign-up-terms' : 'icon-sign-up-terms-tick'
            }
            onClick={checkTermsHandler}
          />
          By signing up you automatically accept all our terms and conditions
        </p>
        {failed && (
          <p className="warning-messages">Please check your inputs.</p>
        )}
        {notChecked && (
          <p className="warning-messages">
            Agree to the terms and conditions to continue.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
