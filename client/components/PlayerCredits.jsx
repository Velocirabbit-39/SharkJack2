import React from 'react';

const PlayerCredit = (props) => {
  return (
    <div className='playerCreditContainer'>
      <h2>Cash: ${props.amount}</h2>
      {props.winner === 'Player' && <p id='youwon'>You Won!</p>}
      {props.winner === 'Dealer' && <p id='youlost'>You Lost!</p>}
      {props.winner === 'Draw' && <p id='draw'>It's a Draw!</p>}
    </div>
  );
};

export default PlayerCredit;