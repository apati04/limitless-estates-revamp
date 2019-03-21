import React from 'react';
import FormatDate from '../FormatDate/FormatDate';
import CalendarDay from '../../components/Events/calendarDay';
const EventListItem = props => {
  let eventFee = null;
  if (!props.link.includes('Out-of-State-Multifamily')) {
    let amount = props.fee.amount.toFixed(2);
    eventFee = `Fee: $${amount}`;
  }

  return (
    <div className="col-lg-6 pl-0">
      <div style={{ opacity: '1' }} className="card my-1 rgba-stylish-slight">
        <div className="card-body">
          <div className="row align-items-stretch justify-content-start">
            <div className="col">
              <div>
                <CalendarDay dateTime={props.time} />
              </div>
            </div>
            <div className="col text-right">
              <h4 className="h4-responsive mb-1 mt-0">
                <div className="">
                  <FormatDate meetupTimeStamp={props.time} />
                </div>
              </h4>
              <div>
                <p style={{ margin: 0, padding: 0 }}>{eventFee}</p>
                <p style={{ margin: 0, padding: 0 }}>
                  <i className="far fa-user" /> {props.yesRsvp}
                </p>
              </div>
              <a
                role="button"
                className="btn btn-sm btn-primary mr-0 "
                rel="noopener noreferrer"
                target="_blank"
                href={props.link}
              >
                Sign Up Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
// props rsvpLimit, yesRsvp, link,time
