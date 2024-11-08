import React from "react";
import NavBar from "./NavBar";  // Adjust path to match the actual location of NavBar
import Home from "./Home"; // Import Home component
import About from "./About"; // Import About component

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
