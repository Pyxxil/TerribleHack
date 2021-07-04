import React, { useState } from "react";

import Teapot from "./teapot.png";
import Card from "./Card";

import "./index.css";

import { Link } from "react-router-dom";

const urls = [
  "/isinternetworking",
  "/thermap",
  "/lazysearch",
  "/stressrelief",
  "/hydra",
  "/emaillecturer",
  "/publicage",
  "/rubberducky",
  "/howdoispell",
  "/symptoms",
  "/qwikmaffs",
  "/makeacronym",
  "/todonelist",
  "/publicposting",
  "/ismyirdstolen",
];

const colours = [
  "#EA5555",
  "#F39C3C",
  "#ECD03F",
  "#6EB35E",
  "#4996C8",
  "#774ED8",
];

const HomePage = () => {
  let index = 0;

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
      <h1>Status Code 418 - I'm a Teapot</h1>
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
          <p className="home-description-text">
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
          link="/isinternetworking"
          title="Is your internet working?"
          colour={getColour()}
        />
        <Card link="/publicage" title="Age Calculator" colour={getColour()} />
        <Card
          link="/emaillecturer"
          title="Email Lecturer Attendance"
          colour={getColour()}
        />
        <Card link="/qwikmaffs" title="Qwik Maffs" colour={getColour()} />
        <Card link="/howdoispell" title="Spell Check" colour={getColour()} />
        <Card link="/lazysearch" title="Lazy Search" colour={getColour()} />
        <Card link="/makeacronym" title="Acronym Finder" colour={getColour()} />
        <Card link="/stressrelief" title="Stress Relief" colour={getColour()} />
        <Card
          link="/publicposting"
          title="Password Manager"
          colour={getColour()}
        />
        <Card
          link="/ismyirdstolen"
          title="Is my IRD Stolen?"
          colour={getColour()}
        />
        <Card
          link="/rubberducky"
          title="Rubber Duck Debugging"
          colour={getColour()}
        />
        <Card
          link="/symptoms"
          title="Check your symptoms"
          colour={getColour()}
        />
        <Card link="/thermap" title="Thermap" colour={getColour()} />
        <Card link="/hydra" title="Hydra" colour={getColour()} />
        <Card link="/todonelist" title="To Done" colour={getColour()} />
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default HomePage;
