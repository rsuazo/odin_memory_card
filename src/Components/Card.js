import React, { useState } from 'react';

const Card = (props) => {
    const [cardName, setCardName] = useState('');

  return (
        <div className="card" onClick={props.handleClick} name={props.name}>
            <img src={props.image} alt="Avatar"></img>
            <div className="container">
                <h4><b>{props.cardText}</b></h4> 
            </div>
        </div>
  );
}

export default Card;