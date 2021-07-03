import React, { useState } from "react";

import Teapot from "./teapot.png";
import Card from "./Card";

import "./index.css";

const HomePage = () => {
  const colours=[
    "#EA5555", 
    "#F39C3C", 
    "#ECD03F", 
    "#6EB35E", 
    "#4996C8",
    "#774ED8"
  ]
  let index = 0;

  function getColour() {
    const colour = colours[index];
    index = (index + 1) % colours.length;
    return colour;
  }

  return <div className="home-page">
    <h1>Error 418 - I'm a Teapot</h1>
    <div className='home-container'>
      <div className='home-container2'>
        <section className='event'  id='event'>
            <div className='event-content'>
              <img src={Teapot} alt='SweetLandia' id='sweetlandia' className="teapot" />
            </div>
        </section>
        <p>The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. </p>
      </div>

      <h2>"That's a terrible idea... Do it."</h2>
        <Card link="/isInternetWorking" title="Is your internet working?" colour={getColour()} />
        <Card link="/thermapp" title="Thermapp" colour={getColour()} />
        <Card link="/lazysearch" title="Lazy Search" colour={getColour()} />
        <Card link="/StressRelief" title="Stress Relief" colour={getColour()} />
    </div>

  </div>;
};

export default HomePage;
