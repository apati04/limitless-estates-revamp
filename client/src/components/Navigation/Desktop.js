import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
/**
 * 
 *   menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
 */
//asdf
const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    position: "relative"
  },
  imageStyles: {
    maxWidth: "100%",
    height: "auto",
    width: "10em"
  }
};
const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            spacing={8}
            justifyContent="start"
            alignItems="center"
          >
            <Grid item>
              <img
                alt="logo"
                src="https://i.imgur.com/IlUnKOe.png"
                className={classes.imageStyles}
              />
            </Grid>
            <Grid item>
              <Button color="inherit" variant="text">
                Home
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
