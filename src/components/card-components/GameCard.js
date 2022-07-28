import React, { setState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card-components.css";

function GameCard(props) {
  const { name, handleClick, image } = props;

  return (
    <div onClick={handleClick} name={name} className="game-card">
      <Typography variant="h4">{name}</Typography>
      <Card
        sx={{
          width: "249px",
          height: "357px",
          backgroundImage: `url(${image})`,
        }}
      >
        <CardContent></CardContent>
      </Card>
    </div>
  );
}

export default GameCard;
