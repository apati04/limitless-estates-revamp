import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// -----------
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import HomeIcon from "@material-ui/icons/Home";
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
  ContactLink
} from "../routes";
// const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    width: "100%",
    maxWidth: 360,
    minWidth: 306,
    backgroundcolor: theme.palette.background.paper,
    color: "black",
    paddingRight: 0
  },
  appRoot: {
    flexGrow: 1
  },
  listItem: {
    paddingLeft: theme.spacing.unit * 3
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5
  },
  nestedItem: {
    fontSize: "0.75rem"
  },
  imageStyles: {
    maxWidth: "100%",
    height: "auto",
    width: "10em"
  }
});
class MobileTopNavbar extends Component {
  state = {
    left: false,
    markets: true,
    resources: true,
    events: true
  };
  handleListClick = section => () => {
    this.setState(state => ({ [section]: !state[section] }));
  };
  sidebarItems = () => {
    const { classes } = this.props;
    const HomeLink = props => <Link to="/" {...props} />;
    return (
      <List
        component="nav"
        subheader={
          <ListSubheader
            className={classes.listItem}
            style={{ color: "black" }}
            component={HomeLink}
          >
            Limitless Estates LLC
          </ListSubheader>
        }
        className={classes.root}
      >
        <Divider light />
        <ListItem
          className={classes.listItem}
          button
          onClick={this.toggleDrawer("left", false)}
          component={AboutLink}
        >
          <ListItemText primary="About" />
        </ListItem>
        <Divider light />

        <ListItem
          className={classes.listItem}
          button
          onClick={this.handleListClick("markets")}
        >
          <ListItemText primary="Markets" />
          {this.state.markets ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider light />
        <Collapse in={this.state.markets} timeout="auto" unmountOnExit>
          <List dense component="div" disablePadding>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={TucsonLink}
            >
              <ListItemText primary="Tucson, AZ" />
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={PhoenixLink}
            >
              <ListItemText primary="Phoenix, AZ" />
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={ColumbusLink}
            >
              <ListItemText primary="Columbus, OH" />
            </ListItem>
          </List>
        </Collapse>
        <Divider light />
        <ListItem
          className={classes.listItem}
          button
          onClick={this.handleListClick("resources")}
        >
          <ListItemText primary="Resources" />
          {this.state.resources ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider light />
        <Collapse in={this.state.resources} timeout="auto" unmountOnExit>
          <List
            style={{ backgroundColor: "#f9f9f9" }}
            dense
            component="div"
            disablePadding
          >
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={WhyInvestLink}
            >
              <ListItemText primary="Why Invest In Multifamily" />
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={ImpactInvestingLink}
            >
              <ListItemText primary="Impact Investing" />
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={IraLink}
            >
              <ListItemText primary="Self Direct 401K/IRA" />
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={FaqLink}
            >
              <ListItemText primary="F.A.Q" />
            </ListItem>
          </List>
        </Collapse>
        <Divider light />
        <ListItem
          className={classes.listItem}
          button
          onClick={this.handleListClick("events")}
        >
          <ListItemText primary="Events" />
          {this.state.events ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider light />
        <Collapse in={this.state.events} timeout="auto" unmountOnExit>
          <List dense component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={LongBeachLink}
              onClick={this.toggleDrawer("left", false)}
            >
              <ListItemText primary="Long Beach Investors Meetup" />
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDrawer("left", false)}
              className={classes.nested}
              component={CerritosLink}
            >
              <ListItemText primary="Cerritos Investors Roundtable Meetup" />
            </ListItem>
          </List>
        </Collapse>
        <Divider light />
        <ListItem
          className={classes.listItem}
          button
          onClick={this.toggleDrawer("left", false)}
          component={QuestionnaireLink}
        >
          <ListItemText primary="Questionnaire" />
        </ListItem>
        <Divider light />
        <ListItem
          className={classes.listItem}
          button
          onClick={this.toggleDrawer("left", false)}
          component={PodcastLink}
        >
          <ListItemText primary="Podcast" />
        </ListItem>
        <Divider light />
        <ListItem
          className={classes.listItem}
          button
          onClick={this.toggleDrawer("left", false)}
          component={ContactLink}
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <Divider light />
      </List>
    );
  };
  toggleDrawer = (side, open) => () => {
    this.setState({ [side]: open });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appRoot}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              spacing={0}
              justifyContent="between"
              alignItems="center"
            >
              <Grid item>
                <img
                  alt="logo"
                  src="https://i.imgur.com/IlUnKOe.png"
                  className={classes.imageStyles}
                />
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                color="inherit"
                onClick={this.toggleDrawer("left", true)}
                aria-label="Open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={this.state.left}
                onClose={this.toggleDrawer("left", false)}
              >
                {/* <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
             
            </div> */}
                {this.sidebarItems()}
              </Drawer>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MobileTopNavbar);
