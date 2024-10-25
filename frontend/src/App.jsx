import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Home from "./Components/Home";
import Listings from "./Components/Listings";
import Login from "./Components/Login";

const useStyles = makeStyles({
  devStyle: {
    backgroundColor: "read",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.devStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
