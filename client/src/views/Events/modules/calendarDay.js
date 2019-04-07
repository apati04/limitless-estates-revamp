import React, { Component } from 'react';
import { CalendarIcon } from 'react-calendar-icon';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  calendarIcon: {
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important'
  }
};
class CalendarDay extends Component {
  render() {
    const { classes, dateTime } = this.props;

    return (
      <div className={classes.calendarIcon}>
        <CalendarIcon date={new Date(dateTime)} />
      </div>
    );
  }
}

export default withStyles(styles)(CalendarDay);
