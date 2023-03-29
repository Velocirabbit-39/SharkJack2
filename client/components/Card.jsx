import React from 'react';
import { getCardImage } from '../GameLogic.js';
import { v4 as uuidv4 } from 'uuid';

const Card = (props) => {
    return (
        <img className='cardStyle m-4' key={uuidv4()} src={getCardImage(props.card)} alt="card" />
    )
}

export default Card;