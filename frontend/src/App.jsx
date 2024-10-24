import { useState } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cards from "./Components/CustomCard";
import { NavbarBar } from "./Components/Navbar";
const useStyles = makeStyles({
  devStyle: {
    backgroundColor: "read",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.devStyle}>
      <NavbarBar />
      <Cards />
    </div>
  );
}

export default App;
