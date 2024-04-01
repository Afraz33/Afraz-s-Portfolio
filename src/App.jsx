import { useState, useEffect } from "react";

import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loader/Loader";
import Home from "./components/pages/Home";
import BackgroundTheme from "./components/BackgroundTheme/BackgroundTheme";
import CalendlyPage from "./components/pages/Calendly";
import Router from "./Routes/Routes";
function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",

          backgroundColor: "black",
        }}
      >
        <Router />
      </div>
    </>
  );
}

export default App;
