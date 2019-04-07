import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import productStyles from '../../About/modules/landingPageSections/productStyles';
import InfoSection from '../../Layouts/InfoSection';

import Chat from '@material-ui/icons/Chat';
const styles = theme => ({
  ...productStyles,
  root: {
    flexGrow: 1
  },
  mainTitle: {
    fontSize: 36
  }
});

const EventGrid = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={4}>
        <InfoSection
          title="Catching Detail"
          description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
          icon={Chat}
          iconColor="info"
          vertical
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <InfoSection
          title="Catching Detail"
          description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
          icon={Chat}
          iconColor="info"
          vertical
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <InfoSection
          title="Catching Detail"
          description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
          icon={Chat}
          iconColor="info"
          vertical
        />
      </Grid>
    </Grid>
  );
};

EventGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventGrid);
