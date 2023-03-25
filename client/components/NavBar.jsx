import React from 'react';
import Login from './Login.jsx';

const NavBar = (props) => {

    const login = () => {
        return (
            <Login />

        )
        
    }

    return (
        <div className='navbar navbar-expand-md navbar-dark fixed-top bg-dark px-4'>
            <div className='navBarContainer'>
                <h1 >Shark Jack</h1>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}



export default NavBar;