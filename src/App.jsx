import { useState, useEffect } from "react";

import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loader/Loader";
import Home from "./components/pages/Home";
import Chatbot from "./components/chatbot/Chatbot";
import CalendlyPage from "./components/pages/Calendly";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
        <Chatbot />
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
        {/* <Home />
        <CalendlyPage /> */}
      </div>
    </>
  );
}

export default App;
