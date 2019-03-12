import React, { Component } from "react";
import risks_p2 from "../api/risks_p2";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
class RisksTwo extends Component {
  loadPage = () => {
    const headerImage = "https://i.imgur.com/zneMI2U.jpg";
    risks_p2.map(({ title, body }, i) => {
      return (
        <Typography key={i} variant="body1">
          <strong>{title}</strong>
          {body}
        </Typography>
      );
    });
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid item>{this.loadPage()}</Grid>
        </Grid>
      </div>
    );
  }
}

export default RisksTwo;
