import React, { useState } from 'react';
import Signup from './Signup.jsx';

export default function Login({ setIsLoggedIn, setUserObject}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = () => {
    //e.preventDefault();
    //post request to server to verify username and password
    const u = document.querySelector('#username').value;
    const p = document.querySelector('#password').value;
    // console.log('have reached handleSubmit');
    fetch('/user/login', {
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
        if (data.status) {
          setUserObject(data.user);
          setIsLoggedIn(true);
        } else {
          let error = document.querySelector('.error');
          error.style.display = 'block';
        }
      });
    //if true set is logged in to true
    //if false display wrong username or password
  };

  return (
    <div className='loginContainer'>
      <h1>Login </h1>
      <p className='error'>Wrong Username and Password</p>
      <label htmlFor='username'></label>
      <input
        id='username'
        // placeholder='username'
        // value={formData.username}
        // onChange={(e) => handleChange(e)}
      ></input>
      {/* <label htmlFor='password'></label> */}
      <input
        id='password'
        // placeholder='password'
        // value={formData.password}
        // onChange={(e) => handleChange(e)}
      ></input>
      <button type='button' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

/* <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */
