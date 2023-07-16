import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import './App.css';
import harry from './assets/harry.webp';
import hermione from './assets/hermione.webp';
import ron from './assets/ron.webp';
import hagrid from './assets/hagrid.jpeg';
import snape from './assets/snape.webp';
import banner from './assets/banner.png';

const App = () => {
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
    },
    {
      name: "Rubeus Hagrid",
      nickName: "hagrid",
      image: hagrid,
    },
    {
      name: "Severus Snape",
      nickName: "snape",
      image: snape,
    },
  ]

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [visited, setVisited] = useState(new Set());
  const [characterList, setCharacterList] = useState(characters);

  const incrementScore = () => {
    setScore(score + 1);
    if (score == bestScore) {
      setBestScore(bestScore + 1);
    }
  }
  
  const valid = (e) => {
    let current = e.target.parentElement.getAttribute('name');
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
    visited.clear();
  }

  const generateCharacters = () => {
    let shuffledList = shuffle(characterList);
    return shuffledList;
  }

  useEffect(() => {
    let generatedCharacters = generateCharacters();
    setCharacterList(generatedCharacters);

  },[score]);

  // const checkSelection = () => {
  //   if (valid) {
  //     // correct choice, re-render our cards
  //   } else {
  //     // game over
  //   }
  // }





  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={banner} alt="banner"></img>
        <p>
          Memory Game
        </p>
      </header>
      <div className="gameBody">
          <div className="scoreContainer">
            <span>Score: {score}</span>
            <span>Best Score: {bestScore}</span>
          </div>
          <div className="cardWrapper">
          {
            characterList.map((item,index) => {
              return (
                <Card
                  handleClick={valid} 
                  name={item.nickName} 
                  image={item.image} 
                  cardText={item.name}/>
              )
            })
          }
          </div>
      </div>
    </div>
  );
}

export default App;