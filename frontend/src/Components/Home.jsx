import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import city from "../Assets/city.jpg";

import { NavbarBar } from "./Navbar";

const useStyle = makeStyles({
  imageStyle: {
    width: "100%",
    height: "92vh",
  },
  overlyText: {
    position: "absolute",
    zIndex: "100",
    top: "100px",
    left: "20px",
  },
  homeText: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
  },
  homeBtn: {
    fontSize: "3.5rem",
    borderRadius: "15px",
    backgroundColor: "#FFE700",

    marginTop: "4rem",
    boxShadow: "3px 3px 3px white",
  },
});
function Home() {
  const classes = useStyle();
  return (
    <>
      <NavbarBar />
      <div
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <img src={city} alt="" srcset="" className={classes.imageStyle} />
        <div className={classes.overlyText}>
          <Typography variant="h3" className={classes.homeText}>
            FIND YOUR <span style={{ color: "green" }}>NEXT PROPERTY</span> ON
            THE LBERP WEBSITE
          </Typography>
          <Button
            variant="contained"
            style={{ fontSize: "2rem", backgroundColor: "#1679AB" }}
            className={classes.homeBtn}
          >
            {" "}
            See All Property
          </Button>
        </div>
      </div>
    </>
  );
}
export default Home;
