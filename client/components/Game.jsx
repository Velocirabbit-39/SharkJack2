import React, { useState } from 'react';
import Dealer from './Dealer.jsx';
import HighScore from './HighScore.jsx';
import Player from './Player.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import Table from './Table.jsx';
import { createDeck, shuffleDeck, dealCard, calculateHandScore, getWinner  } from '../GameLogic.js';



const Game = (props) => {
    const [deck, setDeck] = useState(shuffleDeck(createDeck()));

    const [score, setHandScore] = useStatus([]);

    

    const handleClick = () => {
        // ...dostuff
    }

    return (
        <div className='displayContainer'>
            <PlayerCredits />
            <HighScore />
            <Dealer/>
            <Table/>
            <Player/>  
        </div>
    )
}




export default Game;