import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card-components.css";

function GameCard(props) {
  const { name, handleClick, image } = props;

  return (
    <div onClick={handleClick} name={name} className="game-card">
      <Typography variant="h5" sx={{ fontFamily: "Cinzel", color: "white" }}>
        {name}
      </Typography>
      <Card
        sx={{
          width: "150px",
          height: "215px",
          backgroundImage: `url(${image})`,
          borderRadius: "8px",
          border: "2px solid yellow",
        }}
      >
        <CardContent></CardContent>
      </Card>
    </div>
  );
}

export default GameCard;
