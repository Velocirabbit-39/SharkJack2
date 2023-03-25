import React, { useState } from 'react';
import Card from './Card.jsx';
import PlayerCredits from './PlayerCredits.jsx';



const Player = (props) => {

    const [playerHandArr, setPlayerHandArr] = useState([]);

    const hit = () => {
        //do something

    }

    const stand = () => {
        //do something
        
    }

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
                { playerHandArr.map((el) => <Card />)}
            </div>
            <div className='actionContainer'>
                <button  onClick={hit} className="buttonHit btn btn-primary">Hit Me!</button>
                <button onClick={stand} className="buttonStand btn btn-primary">Stand</button>
            </div>
        </div>
    )
}



export default Player;