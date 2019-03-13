import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DropdownItem from "./NavItems/DropdownItem";
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
    position: "relative",
    padding: "8px 24px"
  },
  imageStyles: {
    height: "auto",
    width: "10rem",
    display: "inline-block"
  }
};
const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <img
            alt="logo"
            src="https://i.imgur.com/IlUnKOe.png"
            className={classes.imageStyles}
          />
          <Grid
            container
            justify="flex-end"
            wrap="wrap-reverse"
            alignItems="center"
          >
            <Grid item>
              <Button color="inherit" variant="text">
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" variant="text">
                About
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" variant="text">
                Questionnaire
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" variant="text">
                Podcast
              </Button>
            </Grid>
            <Grid item>
              <DropdownItem
                title="markets"
                listItems={["TUCSON, AZ", "PHOENIX, AZ", "COLUMBUS, OH"]}
              />
            </Grid>

            <Grid item>
              <DropdownItem
                title="resources"
                listItems={[
                  "WHY INVEST IN MULTIFAMILY",
                  "IMPACT INVESTING",
                  "SELF DIRECT 401K/IRA",
                  "INVESTMENT RISKS",
                  "Frequently Asked Questions"
                ]}
              />
            </Grid>
            <Grid item>
              <DropdownItem
                title="events"
                listItems={[
                  "Multifamily Investors Meetup - long beach",
                  "Multifamily Investors Roundtable - cerritos"
                ]}
              />
            </Grid>
            <Grid item>
              <Button color="inherit" variant="text">
                Contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
