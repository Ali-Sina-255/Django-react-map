import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Test from "./TestComponent";
import { Grid2 } from "@mui/material";
function Cards() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Test />
        </Grid>
        <Grid item xs={6}>
          <Test />
        </Grid>
      </Grid>
    </div>
  );
}
export default Cards;
