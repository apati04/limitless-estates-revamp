import React from "react";
import Kyle from "./Kyle";
import Lalita from "./Lalita";
import TeamSideNav from "./TeamSideNav";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});
function About(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={2} />
        <Grid item md={8} className={classes.paper}>
          <Lalita />
        </Grid>
        <Grid item md={2} />
      </Grid>
    </div>
  );
}
export default withStyles(styles)(About);
