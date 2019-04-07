import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import moduleName from '../Home';
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const SDIra = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* <Typography align="left" paragraph component="p" variant="body1">
If you find this information helpful and want to see how you can
get started click the link below to connect with our preferred
partners and setup your self-directed IRA
</Typography> */}
      <Modal buttonText="Play Video" />
    </div>
  );
};

SDIra.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SDIra);
