import React, { useState, useEffect } from 'react';
import Dealer from './Dealer.jsx';
import HighScore from './HighScore.jsx';
import Player from './Player.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import Table from './Table.jsx';
import {
  createDeck,
  shuffleDeck,
  dealCard,
  calculateHandScore,
  getWinner,
  getCardImage,
} from '../GameLogic.js';

// what is the best way to serve image cards? Serve from backend or by importing cards into frontend?

const Game = (props) => {
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  //const [score, setHandScore] = useState('');
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [isPlayerFinished, setIsPlayerFinished] = useState(false);
  const [winner, setWinner] = useState('');
  const [amount, setAmount] = useState(props.user.money);

  const reset = () => {
    setIsPlayerFinished(false);
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck);
    const newPlayerHand = [];
    const newDealerHand = [];

    newPlayerHand.push(dealCard(newDeck));
    newDealerHand.push(dealCard(newDeck));
    newPlayerHand.push(dealCard(newDeck));
    newDealerHand.push(dealCard(newDeck));

    setDeck(newDeck);
    setDealerHand(newDealerHand);
    setPlayerHand(newPlayerHand);
    setWinner('');
  };

  useEffect(() => {
    const tmpDeck = [...deck];
    const newPlayerHand = [];
    const newDealerHand = [];

    newPlayerHand.push(dealCard(tmpDeck));
    newDealerHand.push(dealCard(tmpDeck));
    newPlayerHand.push(dealCard(tmpDeck));
    newDealerHand.push(dealCard(tmpDeck));

    setDeck(tmpDeck);
    setDealerHand(newDealerHand);
    setPlayerHand(newPlayerHand);
  }, []);

  useEffect(() => {
    if (isPlayerFinished) {
      // ... finish dealing dealer cards
      const newDealerHand = [...dealerHand];
      const newDeck = [...deck];
      while (calculateHandScore(newDealerHand) < 17) {
        newDealerHand.push(dealCard(newDeck));
      }
      setDeck(newDeck);
      setWinner(getWinner(playerHand, newDealerHand));
      setDealerHand(newDealerHand);
    }
  }, [isPlayerFinished]);

  const dealPlayerCardOnClick = (e) => {
    const tmpDeck = [...deck];
    const updatedPlayerCard = dealCard(tmpDeck);
    setDeck(tmpDeck);
    setPlayerHand([...playerHand, updatedPlayerCard]);
  };

  return (
    <div className='displayContainer'>
      <PlayerCredits winner={winner} amount={amount} />
      <HighScore reset={reset} />
      <Dealer />
      <Table dealerHand={dealerHand} />
      <Player
        setUserObject={props.setUserObject}
        setWinner={setWinner}
        setAmount={setAmount}
        amount={amount}
        winner={winner}
        user={props.user}
        setIsPlayerFinished={setIsPlayerFinished}
        dealPlayerCardOnClick={dealPlayerCardOnClick}
        playerHand={playerHand}
      />
    </div>
  );
};

export default Game;
