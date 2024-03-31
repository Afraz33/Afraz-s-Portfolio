import profileStyles from "./Profile.module.css";

export default function ProfileModal({ openProfile }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    openProfile && (
      <div className={profileStyles.ProfileDiv}>
        <h1>Afraz </h1>
        <h2>My linekding profile</h2>
        <h3>My github profile</h3>
        <h3>My github profile</h3>
      </div>
    )
  );
}
