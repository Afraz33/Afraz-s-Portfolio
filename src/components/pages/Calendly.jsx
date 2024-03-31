import { useEffect } from "react";
function CalendlyPage() {
  const applyDarkMode = () => {
    const iframe = document.querySelector(".calendly-inline-widget iframe");
    if (iframe) {
      iframe.contentDocument.documentElement.style.backgroundColor = "#333"; // Change background color
      iframe.contentDocument.documentElement.style.color = "#fff"; // Change text color
    }
  };

  // Apply dark mode styles when component mounts
  useEffect(() => {
    applyDarkMode();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <iframe
        style={{ width: "70%", height: "80%", margin: "auto" }}
        className="calendly-inline-widget"
        src="https://calendly.com/afraz3301/30min"
      ></iframe>
    </div>
  );
}

export default CalendlyPage;
