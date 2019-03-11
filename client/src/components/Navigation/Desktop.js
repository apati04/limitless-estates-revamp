import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import moduleName from '@material-ui/icons/';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
//asdf
const styles = theme => ({
  appBar: {
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});
const NavBar = props => {
  const { classes } = props;
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.icon}
          color="inherit"
          aria-label="Open drawer"
        >
          Logo here
        </IconButton>
        <div>
          <Button color="inherit" variant="text">
            Home
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(NavBar);
