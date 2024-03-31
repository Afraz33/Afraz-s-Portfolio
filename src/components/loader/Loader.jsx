import React, { useState, useEffect } from "react";
import "./loader.css";

function Loader() {
  const lines = [
    "I am Afraz Ahmed, a Software Engineer!",
    "I like to think, code and execute",
    "Welcome to my personal portfolio",
    "and have a look at my tech life.",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) =>
        prevIndex === lines.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="line">{lines[currentLineIndex]}</p>
    </div>
  );
}

export default Loader;
