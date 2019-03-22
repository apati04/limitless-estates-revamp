import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import productStyles from '../../About/modules/landingPageSections/productStyles';
import Typography from '@material-ui/core/Typography';
import EventGrid from './EventGrid';
const styles = theme => ({
  ...productStyles,
  root: {
    flexGrow: 1
  },
  mainTitle: {
    fontSize: 36
  },
  gridContainer: {
    ...theme.gridContainer
  },
  gridItem: {
    ...theme.gridItem
  }
});
const EventSchedule = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <Grid container justify="center" className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={12} className={classes.gridItem}>
          <hr className="hr-text" data-content="The Schedule" />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(EventSchedule);
