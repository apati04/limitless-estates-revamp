import React from 'react';
import EventListItem from './eventListItem';
//
const EventList = ({ eventDetails, meetupTime, description }) => {
  let eventDetailList = eventDetails.map(
    ({ rsvp_limit, yes_rsvp_count, id, time, link, fee = '' }) => (
      <EventListItem
        rsvpLimit={rsvp_limit}
        yesRsvp={yes_rsvp_count}
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
