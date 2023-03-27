import React, { useState, useEffect } from 'react';
import Dealer from './Dealer.jsx';
import HighScore from './HighScore.jsx';
import Player from './Player.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import Table from './Table.jsx';
import { createDeck, shuffleDeck, dealCard, calculateHandScore, getWinner, getCardImage } from '../GameLogic.js';


// what is the best way to serve image cards? Serve from backend or by importing cards into frontend?


const Game = (props) => {
    const [deck, setDeck] = useState(shuffleDeck(createDeck()));
    const [score, setHandScore] = useState('');
    const [dealerHand, setDealerHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [isPlayerFinished, setIsPlayerFinished] = useState(false);
    const [winner, setWinner] = useState('');
    
    // console.log('Starting Deck:', deck);
    useEffect(() => {
        const tmpDeck = [...deck];
        const newPlayerHand = [];
        const newDealerHand = []

        newPlayerHand.push(dealCard(tmpDeck));
        newDealerHand.push(dealCard(tmpDeck));
        newPlayerHand.push(dealCard(tmpDeck));
        newDealerHand.push(dealCard(tmpDeck));

        setDeck(tmpDeck);
        setDealerHand(newDealerHand);
        setPlayerHand(newPlayerHand);
        console.log(dealerHand, playerHand)
    }, [])

    useEffect(() => {
        if (isPlayerFinished) {
            // ... finish dealing dealer cards
            const newDealerHand = [...dealerHand];
            const newDeck = [...deck];
            while (calculateHandScore(dealerHand) < 17) {
		        newDealerHand.push(dealCard(newDeck));
	        }
            setDealerHand(newDealerHand);
            setDeck(newDeck);
            setWinner(
                getWinner(playerHand, dealerHand)
            );
        }
    }, [isPlayerFinished])
    
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
            <Dealer />
            <Table dealerHand={dealerHand}/>
            <Player  winner={winner} user={props.user} setIsPlayerFinished={setIsPlayerFinished} dealPlayerCardOnClick={dealPlayerCardOnClick} playerHand={playerHand}/>  
        </div>
    )
}




export default Game;