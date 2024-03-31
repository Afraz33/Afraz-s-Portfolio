import Navbar from "../navbar/Navbar";
import Chatbot from "../chatbot/Chatbot";
function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Chatbot />
      <Navbar />
    </div>
  );
}

export default Home;
