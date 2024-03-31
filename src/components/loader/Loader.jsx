import React, { useState, useEffect } from "react";
import "./loader.css";

function Loader() {
  const lines = [
    "Hello World, This is Afraz Ahmed.",
    // "Afraz likes to think, code and execute",
    // "Welcome to his personal portfolio",
    "Have a look at my tech life!",
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
