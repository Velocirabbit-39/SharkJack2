import React, { useState } from 'react';
import Card from './Card.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import { v4 as uuidv4 } from 'uuid';



const Player = (props) => {

    const handleBet = (e) => {
        if (PlayerCredits < 0) {
            return "Insufficient credits";
        }
        if (e.target.value === 'Bet5') {
            PlayerCredits - 5;
            return;
        }
        return;
    }

    return (
        <div className='playerContainer'>
            <div className='betContainer'>
                <button  onClick={handleBet} id="Bet5" className="bet5 btn btn-primary">$5</button>
                <button  onClick={handleBet} id="Bet10" className="bet10 btn btn-primary">$10</button>
                <button  onClick={handleBet} id="Bet20" className="bet20 btn btn-primary">$20</button>
                <button  onClick={handleBet} id="Bet50" className="bet50 btn btn-primary">$50</button>
                <button  onClick={handleBet} id="Bet100" className="bet100 btn btn-primary">$100</button>
            </div>
            <div className='playerNameContainer'>
                <h2>Player name: </h2>
            </div>
            <div className='playerCardContaner'>
                { props.playerHand.map((el) => <Card card={el} key={uuidv4()} />)}
            </div>
            <div className='actionContainer'>
                <button  onClick={props.dealPlayerCardOnClick} className="buttonHit btn btn-primary">Hit Me!</button>
                <button onClick={() => props.setIsPlayerFinished(true)} className="buttonStand btn btn-primary">Stand</button>
            </div>
        </div>
    )
}



export default Player;