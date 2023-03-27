import React from 'react';

const HighScore = (props) => {
    return (
        <div className='highScoreContainer'>
            <button onClick={props.reset} className="newGame btn btn-primary">New Game</button>
        </div>
    )
}

export default HighScore;