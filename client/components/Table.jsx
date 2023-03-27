import React, { useState } from 'react';
import Card from './Card.jsx';
// import table from "../assets/table.png";
// import cardImg from './../assets/cardImageFolder/2_of_clubs.png';
import { v4 as uuidv4 } from 'uuid';


const Table = (props) => {

  console.log('dealer hand:', props.dealerHand);
  return (
    <div className='tableContainer'>

      { props.dealerHand.map((el) => <Card key={uuidv4()} card={el} />) }


    </div>
  )
}




export default Table;