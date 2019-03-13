import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DropdownItem from "./NavItems/DropdownItem";
import {
  AboutLink,
  TucsonLink,
  PhoenixLink,
  ColumbusLink,
  WhyInvestLink,
  ImpactInvestingLink,
  IraLink,
  RisksLink,
  FaqLink,
  QuestionnaireLink,
  LongBeachLink,
  CerritosLink,
  PodcastLink,
  ContactLink,
  HomeLink
} from "./routes";

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
    minHeight: "56px"
  },
  imageStyles: {
    height: "auto",
    width: "9rem",
    display: "inline-block"
  }
};
const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar className={classes.appBar}>
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
              <Button
                size="small"
                component={HomeLink}
                color="inherit"
                variant="text"
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" component={AboutLink} size="small">
                About
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" color="inherit" variant="text">
                Questionnaire
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" color="inherit" variant="text">
                Podcast
              </Button>
            </Grid>
            <Grid item>
              <DropdownItem
                title="markets"
                listItems={[
                  { title: "TUCSON, AZ", slug: "/markets/tucson-az" },
                  { title: "PHOENIX, AZ", slug: "/markets/phoeniz-az" },
                  { title: "COLUMBUS, OH", slug: "/columbus-oh" }
                ]}
              />
            </Grid>

            <Grid item>
              <DropdownItem
                title="resources"
                listItems={[
                  {
                    title: "WHY INVEST IN MULTIFAMILY",
                    slug: "/resources/why-invest-in-multifamily"
                  },
                  {
                    title: "IMPACT INVESTING",
                    slug: "/resources/impact-investing"
                  },
                  {
                    title: "SELF DIRECT 401K/IRA",
                    slug: "/resources/self-direct-401k-ira"
                  },
                  {
                    title: "Investing risks",
                    slug: "/resources/investing-risks?page=1"
                  },
                  {
                    title: "Frequently Asked Questions",
                    slug: "/resources/frequently-asked-questions"
                  }
                ]}
              />
            </Grid>
            <Grid item>
              <DropdownItem
                title="events"
                listItems={[
                  {
                    title: "Multifamily Investors Meetup - long beach",
                    slug: "/events/meetups/longbeach"
                  },
                  {
                    title: "Multifamily Investors Roundtable - cerritos",
                    slug: "/events/meetups/cerritos"
                  }
                ]}
              />
            </Grid>
            <Grid item>
              <Button size="small" color="inherit" variant="text">
                Contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
