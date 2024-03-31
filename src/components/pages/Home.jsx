import Navbar from "../navbar/Navbar";
import Chatbot from "../chatbot/Chatbot";
import ProfileModal from "../profiles/Profiles";
import { useState } from "react";
function Home() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Navbar openProfile={openProfile} setOpenProfile={setOpenProfile} />
      <ProfileModal openProfile={openProfile} />
    </div>
  );
}

export default Home;
