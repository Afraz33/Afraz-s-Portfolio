import navbarStyles from "./Navbar.module.css";
import logo from "../../assets/images/A.png";
function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logo}>
        <img className={navbarStyles.iconImage} src={logo}></img>

        <h2 className={navbarStyles.name}>afraz.dev</h2>
      </div>
    </nav>
  );
}

export default Navbar;
