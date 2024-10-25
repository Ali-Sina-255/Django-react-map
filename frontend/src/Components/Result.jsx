import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

function Result(props) {
  const [btnColor, setBtnColor] = useState("error");
  const changeColor = () => {
    if (btnColor == "error") {
      setBtnColor("success");
    } else {
      setBtnColor("error");
    }
  };

  return (
    <>
      <Typography variant="center">
        Your data is {props.name} and your color is {props.color}
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={changeColor}
        color={btnColor}
      >
        Submit
      </Button>
    </>
  );
}
export default Result;
