import { useState } from "react";
import navbarStyles from "./Navbar.module.css";
import logo from "../../assets/images/A.png";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";
import ProfileModal from "../profiles/Profiles";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  return (
    <>
      <nav className={navbarStyles.navbar}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={navbarStyles.logo}
        >
          {/* <img className={navbarStyles.iconImage} src={logo}></img> */}

          <h2 className={navbarStyles.name}>afraz.dev</h2>
        </div>
        <div className={navbarStyles.navPages}>
          <div
            onClick={() => {
              navigate("book-a-meet");
            }}
            className={
              navbarStyles.meeting +
              (page === "book-a-meet" ? " " + navbarStyles.active : "")
            }
          >
            <VideoCallIcon sx={{ fontSize: "30px" }} />
            <p>Book a meeting</p>
          </div>
          <div
            onClick={() => {
              navigate("about-portfolio");
            }}
            className={
              navbarStyles.portfolio +
              (page === "about-portfolio" ? " " + navbarStyles.active : "")
            }
          >
            <InfoIcon sx={{ fontSize: "25px" }} />
            <p>About the portfolio</p>
          </div>
          <div
            style={{
              border: openProfile ? "2px solid #2e88f6" : "2px solid #222",
            }}
            onClick={() => {
              setOpenProfile((value) => !value);
            }}
            className={navbarStyles.logoRight}
          >
            <img className={navbarStyles.iconImageRight} src={logo}></img>
          </div>
        </div>
      </nav>
      <ProfileModal openProfile={openProfile} />
    </>
  );
}

export default Navbar;
