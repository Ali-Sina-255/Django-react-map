import { useNavigate } from "react-router-dom";
import { Button, Typography, AppBar, Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  leftNav: {
    marginRight: "auto",
  },
  rightNav: {
    marginLeft: "auto",
    marginRight: "6rem",
  },

  AddPro: {
    backgroundColor: "#FFE700",
    color: "black",
    width: "15rem",
    fontSize: "1.1rem",
    marginRight: "1rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#FFF100",
    },
  },
  logBtn: {
    backgroundColor: "white",
    color: "black",
    width: "15rem",
    fontSize: "1.1rem",
    marginLight: "1rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#FFF100",
    },
  },
});

export default function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#088395" }}>
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit" onClick={() => navigate("/")}>
              <Typography variant="h4">LBREP</Typography>
            </Button>
          </div>
          <div>
            <Button
              color="inherit"
              style={{ marginRight: "2rem" }}
              onClick={() => navigate("/listing")}
            >
              <Typography variant="h6">Listing</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="h6" style={{ marginLeft: "2rem" }}>
                Agencies
              </Typography>
            </Button>
          </div>
          <div className={classes.rightNav}>
            <Button color="inherit">
              {" "}
              <Typography className={classes.AddPro} variant="h6">
                Add Property
              </Typography>
            </Button>
            <Button color="inherit" onClick={() => navigate("/login")}>
              <Typography variant="h6" className={classes.logBtn}>
                Login
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
