import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import { v4 as uuidv4 } from 'uuid';
import { calculateHandScore } from '../GameLogic.js';

const Player = (props) => {
  const [bet, setBet] = useState(0);
  //   const [amount, setAmount] = useState(props.user.money);

  useEffect(() => {
    console.log('this is winner', props.winner);
    if (props.winner === 'Draw') {
      setBet(0);
    } else if (props.winner === 'Dealer') {
      props.setAmount(props.amount - bet);
      setBet(0);
      fetch('./user/' + props.user.username, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          money: props.amount,
          handsWon: props.user.handsWon,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          props.setUserObject(data.updated);
          console.log(data.updated);
        });
    } else if (props.winner === 'Player') {
      props.setAmount(props.amount + bet);
      setBet(0);
      fetch('./user/' + props.user.username, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          money: props.amount,
          handsWon: props.user.handsWon + 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          props.setUserObject(data.updated);
          console.log(data.updated);
        });
    }
  }, [props.winner]);

  const handleBet = (input) => {
    setBet(input);
  };

  return (
    <div className='playerContainer'>
      <div>
        <h3>Current Bet: {bet}</h3>
      </div>
      <div className='betContainer'>
        <button
          onClick={() => handleBet(5)}
          id='Bet5'
          className='bet5 btn btn-primary'
        >
          $5
        </button>
        <button
          onClick={() => handleBet(10)}
          id='Bet10'
          className='bet10 btn btn-primary'
        >
          $10
        </button>
        <button
          onClick={() => handleBet(20)}
          id='Bet20'
          className='bet20 btn btn-primary'
        >
          $20
        </button>
        <button
          onClick={() => handleBet(50)}
          id='Bet50'
          className='bet50 btn btn-primary'
        >
          $50
        </button>
        <button
          onClick={() => handleBet(100)}
          id='Bet100'
          className='bet100 btn btn-primary'
        >
          $100
        </button>
      </div>
      <div className='playerNameContainer'>
        <h2>Player name: </h2>
      </div>
      <div className='playerCardContaner'>
        {props.playerHand.map((el) => (
          <Card card={el} key={uuidv4()} />
        ))}
      </div>
      <div className='actionContainer'>
        <button
          onClick={() => {
            if (calculateHandScore(props.playerHand) >= 21)
              props.setIsPlayerFinished(true);
            else {
              props.dealPlayerCardOnClick();
            }
          }}
          className='buttonHit btn btn-primary'
        >
          Hit Me!
        </button>
        <button
          onClick={() => props.setIsPlayerFinished(true)}
          className='buttonStand btn btn-primary'
        >
          Stand
        </button>
      </div>
    </div>
  );
};

export default Player;
