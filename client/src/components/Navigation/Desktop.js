import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PrimaryNavMenu from './NavItems/PrimaryNavMenu';

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
    minHeight: '56px'
  },
  imageStyles: {
    height: 'auto',
    marginBottom: '6px',
    width: '9rem',
    display: 'inline-block'
  }
};
const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="relative">
        <Toolbar className={classes.appBar}>
          <img
            alt="logo"
            src="https://i.imgur.com/IlUnKOe.png"
            className={classes.imageStyles}
          />
          <PrimaryNavMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
