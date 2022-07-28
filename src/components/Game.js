import React, { useState, useEffect } from "react";
import "./game.css";
import GameGrid from "./card-components/GameGrid";
import { Typography } from "@mui/material";
import uniqid from "uniqid";
import ciriImage from "./images/ciri.jpg";
import dandelionImage from "./images/dandelion.jpg";
import geraltImage from "./images/geralt.jpg";
import yenneferImage from "./images/yennefer.jpg";

function Game(props) {
  const [cards, setCards] = useState([
    { name: "Geralt", id: uniqid(), image: geraltImage },
    { name: "Ciri", id: uniqid(), image: ciriImage },
    { name: "Yennefer", id: uniqid(), image: yenneferImage },
    { name: "Vesemir", id: uniqid(), image: "./images/ciri.jpg" },
    { name: "Tris", id: uniqid(), image: "./images/ciri.jpg" },
    { name: "Lambert", id: uniqid(), image: "./images/ciri.jpg" },
  ]);
  const [guessed, setGuessed] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shuffleArray(arr) {
    const array = arr;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function clickCard(e) {
    const name = e.currentTarget.getAttribute("name");
    const character = cards.filter((card) => card.name === name);
    if (guessed.some((card) => card.name === name)) {
      setGuessed([]);
    } else {
      setGuessed([...guessed, character[0]]);
    }
    setCards(shuffleArray(cards));
  }

  useEffect(() => {
    setScore(guessed.length);
    if (highScore < guessed.length) {
      setHighScore(guessed.length);
    }
  }, [guessed]);

  return (
    <div>
      <div id="score-board">
        <Typography variant="h3">score: {score}</Typography>
        <Typography variant="h3">
          <strong>highScore:</strong> {highScore}
        </Typography>
      </div>
      <GameGrid allCards={cards} handleClick={clickCard} />
    </div>
  );
}

export default Game;
