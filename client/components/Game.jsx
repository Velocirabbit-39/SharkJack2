import React, { useState } from 'react';
import Dealer from './Dealer.jsx';
import HighScore from './HighScore.jsx';
import Player from './Player.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import Table from './Table.jsx';
import { createDeck, shuffleDeck, dealCard, calculateHandScore, getWinner, getCardImage } from '../GameLogic.js';


// what is the best way to serve image cards? Serve from backend or by importing cards into frontend?


const Game = (props) => {
    const [deck, setDeck] = useState(createDeck());
    const [score, setHandScore] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    
    // console.log('Starting Deck:', deck);

    
    const dealPlayerCardOnClick = (e) => {
        console.log('dealPlayerCard called');
        console.log(deck);
        const tmpDeck = [...deck];
        console.log('tmpDeck', tmpDeck)
        const updatedPlayerCard = dealCard(tmpDeck);
        setDeck(tmpDeck);
        setPlayerHand([...playerHand, updatedPlayerCard]);
    }

    
    return (
        <div className='displayContainer'>
            <PlayerCredits />
            <HighScore />
            <Dealer/>
            <Table/>
            <Player dealPlayerCardOnClick={dealPlayerCardOnClick} playerHand={playerHand}/>  
        </div>
    )
}




export default Game;