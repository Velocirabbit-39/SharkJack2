import React from 'react';

const Card = (props) => {
    return (
        <img className='cardStyle m-4' src={props.cardSrc} alt="card" srcSet="" />
    )
}

export default Card;