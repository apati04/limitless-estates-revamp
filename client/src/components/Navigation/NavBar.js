import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    flex: 'navtheme'
  }
});
const NavBar = props => {
  return <div>nav bar</div>;
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NavBar);
