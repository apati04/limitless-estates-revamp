import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Banner = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h1">{props.primaryText}</Typography>
      <div className={classNames({ margin: '0.5rem', textAlign: 'center' })}>
        <Button variant="contained" color="primary">
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
