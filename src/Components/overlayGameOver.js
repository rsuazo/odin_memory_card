import React from 'react';

const GameOver = (props) => {
  return (
        <div className="gameOverContainer">
            <p>Game Over!</p>
            <button onClick={props.handleClick} name={props.name}>Restart Game</button>
        </div>
  );
}

export default GameOver;