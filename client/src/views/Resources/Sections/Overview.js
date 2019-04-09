import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import InfoArea from 'components/InfoArea/InfoArea.jsx';
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Overview = props => {
  const { classes } = props;
  console.log('data');
  return (
    <div className={classes.root}>
      <InfoArea
        title="Marketing"
        description="We've created the marketing campaign of the website. It was a very interesting collaboration."
      />
    </div>
  );
};

Overview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Overview);
