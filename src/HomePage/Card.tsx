import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props:any) {
  return <Link to={props.link}>
    <div className="card" style={{"backgroundColor":props.colour}}>
      <h1>{props.title}</h1>
    </div>
  </Link>
};

export default Card;
