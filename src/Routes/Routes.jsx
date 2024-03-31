import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import CalendlyPage from "../components/pages/Calendly";
function Router() {
  return (
    <Routes>
      <Route path="/book-a-meet" element={<CalendlyPage />}></Route>;
      <Route path="/" element={<Home />}></Route>;
    </Routes>
  );
}

export default Router;
