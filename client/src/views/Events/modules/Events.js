import React, { Component } from 'react';
import EventList from './eventList';

class Events extends Component {
  render() {
    const { time, description, meetupArray } = this.props;
    let eventList;
    if (Array.isArray(meetupArray)) {
      eventList = (
        <EventList
          description={description}
          meetupTime={time}
          eventDetails={meetupArray}
        />
      );
    }

    return <div>{eventList}</div>;
  }
}

export default Events;
