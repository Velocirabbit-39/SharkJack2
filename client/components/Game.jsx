import React from 'react';
import Dealer from './Dealer.jsx';
import HighScore from './HighScore.jsx';
import Player from './Player.jsx';
import PlayerCredits from './PlayerCredits.jsx';
import Table from './Table.jsx';

const Game = (props) => {
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