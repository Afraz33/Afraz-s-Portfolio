import profileStyles from "./Profile.module.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import resume from "../../assets/images/resume.png";
import Afraz from "../../assets/images/Afraz.jpg";
export default function ProfileModal({ openProfile }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    openProfile && (
      <div className={profileStyles.ProfileSection}>
        <img className={profileStyles.selfImage} src={Afraz}></img>
        <a
          style={{
            fontSize: "14px",
            textAlign: "center",
            textDecorationStyle: "none",
            color: "white",
          }}
          href="mailto:afraz3301@gmail.com"
        >
          afraz3301@gmail.com
        </a>
        <hr />
        <div className={profileStyles.ProfileDiv}>
          <a
            href="https://www.linkedin.com/in/afraz03/"
            className={profileStyles.appLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={profileStyles.appIcon} src={linkedin}></img>
            <p className={profileStyles.appTitle}>Afraz's Linkedin</p>
          </a>
          <a
            href="https://github.com/Afraz33"
            className={profileStyles.appLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={profileStyles.appIcon} src={github}></img>
            <p className={profileStyles.appTitle}>Afraz's Github</p>
          </a>
          <a
            href="https://docs.google.com/document/d/1so0qkYlZXitxaSbWyDQTLqZWC9HjukrMMewzKd3cY7Q/edit#heading=h.pwa7glqzw54g"
            className={profileStyles.appLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={profileStyles.appIcon} src={resume}></img>
            <p className={profileStyles.appTitle}>Afraz's Resume</p>
          </a>
        </div>
      </div>
    )
  );
}
