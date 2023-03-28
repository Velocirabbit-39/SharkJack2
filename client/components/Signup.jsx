import React, { useState } from 'react';

export default function Signup({ setIsLoggedIn, setShowCreateAccount }) {
  const signup = () => {
    const u = document.querySelector('#username').value;
    const p = document.querySelector('#password').value;
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: u,
        password: p,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoggedIn(false);
        setShowCreateAccount(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Signup </h1>
      <p>Create an Account: </p>
      <p className='error'>Wrong Username and Password</p>
      <label htmlFor='username'></label>
      <input id='username'></input>
      <input id='password'></input>
      <button onClick={signup} type='button'>
        Submit
      </button>
    </div>
  );
}
