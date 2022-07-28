import React, { useState, useEffect } from "react";
import "./game.css";
import GameGrid from "./card-components/GameGrid";
import { Typography } from "@mui/material";
import uniqid from "uniqid";
import ciriImage from "./images/ciri.jpg";
import dandelionImage from "./images/dandelion.jpg";
import geraltImage from "./images/geralt.jpg";
import yenneferImage from "./images/yennefer.jpg";
import vesemirImage from "./images/vesemir.jpg";
import trissImage from "./images/triss.jpg";
import lambertImage from "./images/lambert.jpg";
import keiraImage from "./images/keira.jpg";
import zoltanImage from "./images/zoltan.jpg";
import regisImage from "./images/regis.jpg";
import eskelImage from "./images/eskel.jpg";
import rocheImage from "./images/roche.jpg";

function Game(props) {
  const [cards, setCards] = useState([
    { name: "Geralt", id: uniqid(), image: geraltImage },
    { name: "Ciri", id: uniqid(), image: ciriImage },
    { name: "Yennefer", id: uniqid(), image: yenneferImage },
    { name: "Vesemir", id: uniqid(), image: vesemirImage },
    { name: "Triss", id: uniqid(), image: trissImage },
    { name: "Dandelion", id: uniqid(), image: dandelionImage },
    { name: "Lambert", id: uniqid(), image: lambertImage },
    { name: "Keira", id: uniqid(), image: keiraImage },
    { name: "Roche", id: uniqid(), image: rocheImage },
    { name: "Eskel", id: uniqid(), image: eskelImage },
    { name: "Zoltan", id: uniqid(), image: zoltanImage },
    { name: "Regis", id: uniqid(), image: regisImage },
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
    <div id="top">
      <div id="score-board">
        <Typography
          variant="h1"
          sx={{ fontFamily: "Cinzel", fontSize: "3.5rem" }}
        >
          Witcher III Memory Game
        </Typography>
        <Typography variant="h4">score: {score}</Typography>
        <Typography variant="h4">
          <strong>highScore:</strong> {highScore}
        </Typography>
      </div>
      <GameGrid allCards={cards} handleClick={clickCard} />
    </div>
  );
}

export default Game;
