import navbarStyles from "./Navbar.module.css";
import logo from "../../assets/images/A.png";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";

function Navbar({ openProfile, setOpenProfile }) {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logo}>
        {/* <img className={navbarStyles.iconImage} src={logo}></img> */}

        <h2 className={navbarStyles.name}>afraz.dev</h2>
      </div>
      <div className={navbarStyles.navPages}>
        <div
          // onClick={() => {
          //   navigate("book-a-meet");
          // }}
          className={navbarStyles.meeting}
        >
          <VideoCallIcon sx={{ fontSize: "30px" }} />
          <p>Book a meeting</p>
        </div>
        <div className={navbarStyles.portfolio}>
          <InfoIcon sx={{ fontSize: "30px" }} />
          <p>About the portfolio</p>
        </div>
        <div
          style={{
            border: openProfile ? "2px solid #2e88f6" : "2px solid black",
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
  );
}

export default Navbar;
