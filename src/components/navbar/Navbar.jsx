import navbarStyles from "./Navbar.module.css";
import logo from "../../assets/images/A.png";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";
function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logo}>
        {/* <img className={navbarStyles.iconImage} src={logo}></img> */}

        <h2 className={navbarStyles.name}>afraz.dev</h2>
      </div>
      <div className={navbarStyles.navPages}>
        <div className={navbarStyles.meeting}>
          <VideoCallIcon sx={{ fontSize: "30px" }} />
          <p>Book a meet</p>
        </div>
        <div className={navbarStyles.portfolio}>
          <InfoIcon sx={{ fontSize: "30px" }} />
          <p>About the portfolio</p>
        </div>
        <div className={navbarStyles.logoRight}>
          <img className={navbarStyles.iconImageRight} src={logo}></img>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
