import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import Game from './Game.jsx';
import Login from './Login.jsx';
import '../style.css';
import Signup from './Signup.jsx';

function App() {
  // const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [userObject, setUserObject] = useState({});



  if (!isLoggedIn) {
    if(showCreateAccount){
      return <Signup setShowCreateAccount={setShowCreateAccount} setIsLoggedIn={setIsLoggedIn}/>
    }
    
    return (
      <div>
            <button onClick={() => setShowCreateAccount(true)}>
              Don't have an account?
            </button>
            <Login setUserObject={setUserObject} setIsLoggedIn={setIsLoggedIn} />
      </div>
    );
  }

  return (
    <div>
      <Game 
      setUserObject={setUserObject}
      user={userObject}
      />
    </div>
  );
}

export default App;
