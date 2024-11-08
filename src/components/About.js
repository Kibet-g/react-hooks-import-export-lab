import React from "react";
import { image } from "../data/user"; // Import the named export

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About; // Make sure to export About as default
