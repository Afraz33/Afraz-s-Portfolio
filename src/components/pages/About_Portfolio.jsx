import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
function About_Portfolio() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "40%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "10px",
          fontSize: "24px",
        }}
      >
        {" "}
        <ConstructionOutlinedIcon sx={{ fontSize: "44px" }} />
        <p>This Page is under Construction</p>
      </div>
    </div>
  );
}

export default About_Portfolio;
