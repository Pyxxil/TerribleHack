import React, { useState } from "react";

import Teapot from "./teapot.png";
import Card from "./Card";

import "./index.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const colours = [
    "#EA5555",
    "#F39C3C",
    "#ECD03F",
    "#774ED8",
    "#4996C8",
    "#6EB35E",
  ];
  let index = 0;

  const urls = [
    "/isInternetWorking",
    "/thermap",
    "/lazysearch",
    "/StressRelief",
    "/hydra_page",
    "/EmailLecturer",
    "/publicAge",
    "/rubberducky",
    "/howdoispell",
    "/makeacronym",
  ];

  const getColour = () => {
    const colour = colours[index];
    index = (index + 1) % colours.length;
    return colour;
  };

  const getRandomUrl = () => {
    const url = urls[Math.floor(Math.random() * urls.length)];
    return url;
  };

  return (
    <div className="home-page">
      <h1>Error 418 - I'm a Teapot</h1>
      <div className="home-container">
        <div className="home-container2">
          <section className="event" id="event">
            <div className="event-content">
              <img
                src={Teapot}
                alt="SweetLandia"
                id="sweetlandia"
                className="teapot"
              />
            </div>
          </section>
          <p>
            The HTTP 418 I'm a teapot client error response code indicates that
            the server refuses to brew coffee because it is, permanently, a
            teapot. A combined coffee/tea pot that is temporarily out of coffee
            should instead return 503.{" "}
          </p>
        </div>

        <h2>"That's a terrible idea... Do it."</h2>
        <Link to={getRandomUrl()}>
          <div className="stupid-button">
            Take me to something <del>dumb</del> genius
          </div>
        </Link>
        <br />

        <Card
          link="/isInternetWorking"
          title="Is your internet working?"
          colour={getColour()}
        />
        <Card link="/thermap" title="Thermap" colour={getColour()} />
        <Card link="/lazysearch" title="Lazy Search" colour={getColour()} />
        <Card link="/StressRelief" title="Stress Relief" colour={getColour()} />
        <Card link="/hydra_page" title="Hydra" colour={getColour()} />
        <Card
          link="/EmailLecturer"
          title="Email Lecturer Ditching"
          colour={getColour()}
        />
        <Card
          link="/publicAge"
          title="Public Age Calculator"
          colour={getColour()}
        />
        <Card
          link="/rubberducky"
          title="Rubber Duck Debugging"
          colour={getColour()}
        />
        <Card link="/howdoispell" title="Learn to Spell" colour={getColour()} />
        <Card
          link="/makeacronym"
          title="Find out what an acronym is"
          colour={getColour()}
        />
      </div>
    </div>
  );
};

export default HomePage;
