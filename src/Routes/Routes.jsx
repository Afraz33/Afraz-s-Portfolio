import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import CalendlyPage from "../components/pages/Calendly";
import About_Portfolio from "../components/pages/About_Portfolio";
import Navbar from "../components/navbar/Navbar";
import BackgroundTheme from "../components/BackgroundTheme/BackgroundTheme";
function Router() {
  return (
    <>
      <Navbar />
      <BackgroundTheme />
      <Routes>
        <Route path="/book-a-meet" element={<CalendlyPage />}></Route>;
        <Route path="/" element={<Home />}></Route>;
        <Route path="/about-portfolio" element={<About_Portfolio />}></Route>;
      </Routes>
    </>
  );
}

export default Router;
