import React from "react";
import Message from './message';
import Ducky from './ducky.png';
import './styles.css';

const CondescendingRubberDuck = () => {
  return (
    <div className="ducky">
        <img src={ Ducky } />
        <Message />
    </div>
  );
};

export default CondescendingRubberDuck;