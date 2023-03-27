import React, { useState } from 'react';
import Card from './Card.jsx';
// import table from "../assets/table.png";
// import cardImg from './../assets/cardImageFolder/2_of_clubs.png';
import { v4 as uuidv4 } from 'uuid';


const Table = (props) => {

  const [dealerHandArr, setDealerHandArr] = useState([]);
  // console.log('cardImg:', cardImg);

  return (
    <div className='tableContainer'>

      { dealerHandArr.map((el) => <Card key={uuidv4()} cardSrc={cardImg} />) }


    </div>
  )
}




export default Table;