import { useState, useEffect } from "react";

import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loader/Loader";
import Home from "./components/pages/Home";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
        {!isLoading ? (
          <Home />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
          >
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
