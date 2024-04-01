import Navbar from "../navbar/Navbar";
import BackgroundTheme from "../BackgroundTheme/BackgroundTheme";

import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <BackgroundTheme />

      {!isLoading && <Navbar />}

      {isLoading && (
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
  );
}

export default Home;
