import React from 'react';
import EventListItem from './eventListItem';
import ScheduleTable from '../Meetups/ScheduleTable';
//
const EventList = ({ eventDetails, meetupTime, description }) => {
  let eventDetailList = eventDetails.map(
    ({
      rsvp_limit,
      name,
      yes_rsvp_count,
      status,
      id,
      time,
      link,
      fee = ''
    }) => (
      <ScheduleTable
        eventName={name}
        rsvpLimit={rsvp_limit}
        status={status}
        yesRsvp={yes_rsvp_count}
        meetupDetails={eventDetails}
        key={id}
        link={link}
        time={time}
        fee={fee}
        details={description}
        meetupTime={meetupTime}
      />
    )
  );
  return <div className="row w-100 m-0 p-0">{eventDetailList}</div>;
};

export default EventList;
// renderMeetups = () => {
//   const { meetupArray } = this.props;
//   if (Array.isArray(meetupArray)) {
//     return meetupArray.map((el, index) => (
//       <div key={index}>
//         <FormatDate meetupTimeStamp={el.time} />
//       </div>
//     ));
//   }
//   return <div>Loading...</div>;
// };
