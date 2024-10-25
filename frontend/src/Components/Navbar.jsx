import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  leftNav: {
    marginRight: "auto",
  },
  rightNav: {
    marginLeft: "auto",
    marginLeft: "10rem",
  },

  addProperty: {
    backgroundColor: "green",
    color: "white",
    width: "10rem",
    padding: "8px",
    borderRadius: "15px",
  },
  loginBtn: {
    marginLeft: "auto",
    backgroundColor: "white",
    color: "black",
    width: "10rem",
    padding: "8px",
    borderRadius: "15px",
    outline: "none",
    "&:hover": {
      backgroundColor: "#08C2FF",
    },
  },
});

export const NavbarBar = () => {
  const [btnColor, setBtnColor] = useState("error");
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#257180" }}>
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit" onClick={() => navigate("/")}>
              <Typography variant="h4">LBERP</Typography>
            </Button>
          </div>
          <div>
            <Button color="inherit" onClick={() => navigate("listing")}>
              <Typography variant="h6">Listing</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="h6">Agencies</Typography>
            </Button>
          </div>
          <div className={classes.rightNav}>
            <Button color="inherit">
              <Typography className={classes.addProperty}>
                Add Property
              </Typography>
            </Button>

            <Button color="inherit" onClick={() => navigate("login")}>
              <Typography className={classes.loginBtn}>Login</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
