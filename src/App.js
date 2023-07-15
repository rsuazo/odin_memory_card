import React, { useState } from 'react';
import Card from './Components/Card';
import './App.css';
import harry from './assets/harry.webp';
import hermione from './assets/hermione.webp';

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

  const characters = ["Harry Potter", "Hermione Granger"];

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
        <Card handleClick={valid} name="harry" image={harry} cardText={characters[0]}/>
        <Card handleClick={valid} name="hermione" image={hermione} cardText={characters[1]}/>
      </div>
    </div>
  );
}

export default App;