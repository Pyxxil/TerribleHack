import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props:any) {
  const colours=[
    "#EA5555", 
    "#F39C3C", 
    "#ECD03F", 
    "#6EB35E", 
    "#4996C8",
    "#774ED8"
  ]
  console.log("Card", props.colour)

  return <Link to={props.link}>
    <div className="card" style={{"backgroundColor":colours[props.colour]}}>
      <h1>{props.title}</h1>
    </div>
  </Link>
};

export default Card;
