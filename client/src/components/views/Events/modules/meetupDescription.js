import React, { Fragment } from 'react';

const meetupDescription = () => {
  return (
    <Fragment>
      <p>
        {' '}
        This group is for any interested in investing in out-of-state
        multifamily apartments.
      </p>
      <p>
        Are you interested in the financial power of multifamily real estate?
        Are you new to Real Estate investing but don’t know how to start? Are
        you an experienced investor with properties in LA but aren’t getting the
        returns you desire? Are you interested in cash flow, value-add
        properties, and opportunities outside of CA? Are you an investor and
        looking for alternative ways to make money? Are you an action taker
        looking for your next apartment deal? If so come join us. We invest in
        apartments in markets that simply make sense (or dollars!). Apartment
        investing is a team sport. So come join the best team in LA.
      </p>
      <p style={{ marginBottom: '2px' }}>
        <strong>Event Details</strong>
      </p>
      <ul className="list-unstyled p-0">
        <li key="meetuplb-0">
          <strong>Time: </strong> 6:30pm to 8:30pm
        </li>
        <li key="meetuplb-1">
          <strong>Date: </strong> Every 2nd Tuesday of the month
        </li>
        <li key="meetuplb-2">
          <strong>Location: </strong> <br /> Recreation Park 18 Golf Course
          <br /> 5001 Deukmejian Drive Long Beach, CA 90804
        </li>
      </ul>
      <p>
        Day and times vary by location. For the most up to date schedule and
        venue please visit{' '}
        <a
          href="https://www.meetup.com/Out-of-State-Multifamily-Apartment-Investors-Meetup/"
          rel="nofollow"
        >
          this page
        </a>
        . Hope to see you all there!
      </p>
    </Fragment>
  );
};

export default meetupDescription;
