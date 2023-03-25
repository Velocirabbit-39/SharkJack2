import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import Game from './Game.jsx';
import Login from './Login.jsx';
import '../style.css';


function App() {
  // const [cards, setCards] = useState([]);

  return (
    <div>
        <NavBar />

        <Game />
    </div>
  )

}

export default App;