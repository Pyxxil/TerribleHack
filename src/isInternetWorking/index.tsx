import React from "react";

const divStyle = {
  color: "green",
  fontSize: "200px",
  margin: 0,
  lineHeight: "200px",
  padding: 0
};

const isInternetWorking = () => {
  return (
    <div>
      <div className="vertical-horizontal-center">
        <h1>Is your internet working?</h1>
        <p style={divStyle}>Yes</p>
      </div>
    </div>
  );
};

export default isInternetWorking;
