import React, { Component } from 'react';
import { CalendarIcon } from 'react-calendar-icon';
import { ThemeProvider } from 'styled-components';

const theme = {
  calendarIcon: {
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important'
  }
};
class CalendarDay extends Component {
  render() {
    const { dateTime } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CalendarIcon date={new Date(dateTime)} />
      </ThemeProvider>
    );
  }
}

export default CalendarDay;
