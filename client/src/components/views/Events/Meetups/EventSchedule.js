import React from 'react';

import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import productStyles from '../../About/modules/landingPageSections/productStyles';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';
import EventGrid from './EventGrid';
import ScheduleTable from './ScheduleTable';

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
  const loadSchedule = eventListArray => {
    return eventListArray.map((item, index) => {
      console.log(item);
      const t = new Date(item.time);
      return (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={12}
          md={12}
          className={classes.gridItem}
        >
          <ScheduleTable
            title={item.name}
            featuredPhoto={item.featured_photo}
            eventData={item}
          >
            <Moment format="ddd, MMM Do">{t}</Moment>
          </ScheduleTable>
        </Grid>
      );
    });
  };
  return (
    <div className={classes.section}>
      <Grid
        container
        justify="center"
        alignItems="stretch"
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={12} md={12} className={classes.gridItem}>
          <hr className="hr-text" data-content="Upcoming" />
        </Grid>
        {loadSchedule(props.eventList)}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(EventSchedule);
