import { useThemeProps } from "@mui/system";
import React from "react";
import GameCard from "./GameCard";
import "./card-components.css";
import board from "../images/board.png";

function GameGrid(props) {
  const { allCards, handleClick } = props;
  const grid = allCards.map((card) => (
    <GameCard
      name={card.name}
      handleClick={handleClick}
      key={card.id}
      image={card.image}
    />
  ));
  return (
    <div id="grid-container">
      <div id="game-grid">{grid}</div>
    </div>
  );
}

export default GameGrid;
