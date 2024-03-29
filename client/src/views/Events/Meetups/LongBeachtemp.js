import React, { Component, Fragment } from 'react';
import Events from '../modules/Events';
import EventMap from '../modules/EventMap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MeetupDescription from '../modules/meetupDescription';
import Moment from 'react-moment';
import axios from 'axios';

class LongBeach extends Component {
  state = { meetups: null };
  componentDidMount() {
    axios.get('/events/meetups/lbc').then(({ data }) => {
      this.setState({ meetups: data });
    });
  }

  render() {
    const styles = {
      markerStyle: {
        fontSize: 1.22 + 'em',
        color: 'rgba(46,62,72,.9)'
      },
      listItem: {
        margin: 0,
        padding: 0
      }
    };
    let meetupName,
      meetupTime,
      meetupMap,
      meetupDescription,
      atVenueLocation,
      meetupVenue = '';
    if (this.state.meetups) {
      const {
        time,
        description,
        venue,
        name,
        how_to_find_us
      } = this.state.meetups[0];
      meetupVenue = venue;
      atVenueLocation = how_to_find_us;
      meetupDescription = description;
      meetupMap = <EventMap meetupLocation={venue} />;
      meetupName = name.split('-').map((el, index) => (
        <h1
          style={{ opacity: '0.9' }}
          key={index + 'namestr'}
          className="h1-responsive"
        >
          {el}
        </h1>
      ));
      meetupTime = (
        <Fragment>
          <Moment format="h:mma">{time}</Moment> to{' '}
          <Moment add={{ hours: 2 }} format="h:mma">
            {time}
          </Moment>
        </Fragment>
      );
    }
    return (
      <section
        style={{
          backgroundColor: 'rgb(246, 247, 248)',
          paddingTop: '40px',
          paddingBottom: '100px'
        }}
      >
        <div className="container">
          <div style={{ borderRadius: '4px' }} className="jumbotron z-depth-1">
            <div className="container-fluid ">
              {meetupName}
              <p>
                Hosted By:{' '}
                <a
                  href="https://www.meetup.com/Out-of-State-Multifamily-Apartment-Investors-Meetup/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kyle Mitchell and Lalita Mitchell
                </a>
              </p>
              <div className="text-justify">
                <MeetupDescription />
                <p>
                  <strong>Admission/Venue:</strong> We encourage each attendee
                  to spend at least $10 in food/drink, however it is not
                  required.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-lg-8">
              <h3 className="h3-responsive text-center text-md-left mb-4 pb-2 border-bottom">
                Upcoming Meetups
              </h3>
              <div />
              <Events
                description={meetupDescription}
                time={meetupTime}
                howToFindUs={atVenueLocation}
                meetupArray={this.state.meetups}
              />
            </div>
            <div className="col-12 col-lg-4">
              <h3 className="h3-responsive text-center text-md-left mb-2 pb-2 border-bottom invisible">
                Details
              </h3>
              <div className="pt-2 ml-2 my-4">
                <div className="p-0 m-0">{meetupMap}</div>

                <List className="z-depth-1 rounded m-0 p-0">
                  <ListItem>
                    <div className="d-flex w-100 align-items-baseline justify-content-start">
                      <i
                        style={styles.markerStyle}
                        className="mr-1 far fa-clock"
                      />
                      <div className="ml-3">
                        <p>
                          {meetupTime}{' '}
                          <span className="text-muted ">
                            Every 2nd Tuesday of the month
                          </span>
                        </p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className="d-flex w-100 align-items-baseline justify-content-start">
                      <i style={styles.markerStyle} className="far fa-map" />
                      <div className="ml-3">
                        <p style={styles.listItem}>{meetupVenue.name}</p>
                        <p style={styles.listItem} className="text-muted">
                          {meetupVenue.address_1}
                        </p>
                        <p style={styles.listItem} className="text-muted">
                          {meetupVenue.city}, {meetupVenue.state} 90804
                        </p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className="d-flex w-100 align-items-baseline justify-content-start">
                      <i
                        style={styles.markerStyle}
                        className="far fa-compass"
                      />
                      <div className="ml-3">
                        <p style={styles.listItem} className="">
                          {atVenueLocation}
                        </p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LongBeach;
