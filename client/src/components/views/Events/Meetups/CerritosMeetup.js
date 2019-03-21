import React, { Fragment, Component } from 'react';
import Events from '../../components/Events/Events';
import EventMap from '../../components/Events/EventMap';
import ReactHtmlParser from 'react-html-parser';
import { ListGroup, ListGroupItem } from 'mdbreact';
import Moment from 'react-moment';
import axios from 'axios';
class CerritosMeetup extends Component {
  state = { meetups: null };
  componentDidMount() {
    axios.get('/api/meetups/cerritos').then(({ data }) => {
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
                  href="https://www.meetup.com/Cerritos-Multifamily-Investors-Roundtable/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kyle Mitchell
                </a>
              </p>
              <div className="text-justify">
                {ReactHtmlParser(meetupDescription)}
                <ul className="list-unstyled p-0">
                  <li key="meetuplb-3">Admission: $2.50</li>
                </ul>
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
                time={meetupTime}
                description={meetupDescription}
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

                <ListGroup className="z-depth-1 rounded m-0 p-0">
                  <ListGroupItem>
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
                  </ListGroupItem>
                  <ListGroupItem>
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
                  </ListGroupItem>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CerritosMeetup;
