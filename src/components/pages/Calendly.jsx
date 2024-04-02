import Navbar from "../navbar/Navbar";

function CalendlyPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 100px)",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <iframe
          style={{
            width: "70%",
            height: "80%",
            margin: "auto",
            borderRadius: "20px",
          }}
          className="calendly-inline-widget"
          src="https://calendly.com/afraz3301/30min"
        ></iframe>
      </div>
    </div>
  );
}

export default CalendlyPage;
