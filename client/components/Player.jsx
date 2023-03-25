import React from 'react';



const Player = (props) => {

    const hit = () => {
        //do something

    }

    const stand = () => {
        //do something
        
    }



    return (



        <div className='playerContainer'>


            <div className='playerCard1'>Card 1</div>
                <img />

            <div className='playerCard2'>Card 2</div>
                <img />


            <h2>Player name: </h2>

            <button onClick={hit} className="buttonHit btn btn-primary">Hit Me!</button>
            <button onClick={stand} className="buttonStand btn btn-primary">Stand</button>

        </div>


    )
}



export default Player;