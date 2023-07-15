import React, { useState } from 'react';
import Card from './Components/Card';
import './App.css';
import harry from './assets/harry.webp';
import hermione from './assets/hermione.webp';
import ron from './assets/ron.webp';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [visited, setVisited] = useState(new Set());

  const incrementScore = () => {
    setScore(score + 1);
    setBestScore(bestScore + 1);
  }

  const incrementBestScore = () => {
    setBestScore(bestScore + 1);
  }
  
  const valid = (e) => {
    let current = e.target.parentElement.getAttribute('name');
    console.log(current);
    console.log(visited);
    if (!visited.has(current)) {
      setVisited(
        visited.add(current),
      );
      incrementScore();
      return true;
    } else {
      resetScore();
      alert("That Card has already been chosen!");
      return false;
    }
  }

  const resetScore = () => {
    setScore(0);
    setBestScore(0);
    visited.clear();
  }

  const characters = [
    {
      name: "Harry Potter",
      nickName: "harry",
      image: harry,
    },
    {
      name: "Hermione Granger",
      nickName: "hermione",
      image: hermione,
    },
    {
      name: "Ronald Weasley",
      nickName: "ron",
      image: ron,
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Memory Game
        </p>
      </header>
      <div className="gameBody">
        <div className="scoreboardContainer">
          <p>Scoreboard</p>
          <div>Score:{score}</div>
          <div>Best Score:{bestScore}</div>
        </div>
        <div className="cardWrapper">
          {
            characters.map((item,index) => {
              return <Card handleClick={valid} name={item.nickName} image={item.image} cardText={item.name}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;