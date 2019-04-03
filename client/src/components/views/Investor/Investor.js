import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Investor = props => {
  const { classes } = props;

  return <div className={classes.root}>Investor</div>;
};

Investor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Investor);
