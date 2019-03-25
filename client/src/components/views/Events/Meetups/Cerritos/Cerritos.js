import React, { Component, Fragment } from 'react';
import Events from '../../modules/Events';
import EventMap from '../../modules/EventMap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import axios from 'axios';
import placeholderImg from '../../placeholder.jpg';
import Parallax from '../../../Layouts/Parallax';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  appContainer: {
    ...theme.container,
    flexGrow: 1
  },
  markerStyle: {
    fontSize: 1.22 + 'em',
    color: 'rgba(46,62,72,.9)'
  },
  section: {
    height: '100%'
  }
});
class CerritosMeetup extends Component {
  state = { meetups: null };
  componentDidMount() {
    axios.get('/events/meetups/cerritos').then(({ data }) => {
      this.setState({ meetups: data });
    });
  }

  render() {
    const { classes } = this.props;
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
      <section className={classes.section}>
        <Parallax image={placeholderImg} />
        <div className={classes.appContainer}>
          <Grid container justify="space-between">
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
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

                  <Card className="z-depth-1 rounded m-0 p-0">
                    <CardContent>
                      <div className="d-flex w-100 align-items-baseline justify-content-start">
                        <i
                          className={styles.markerStyle}
                          className="far fa-map"
                        />
                        <div className="ml-3">
                          <p>{meetupVenue.name}</p>
                          <p className="text-muted">{meetupVenue.address_1}</p>
                          <p className="text-muted">
                            {meetupVenue.city}, {meetupVenue.state} 90804
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardContent>
                      <div className="d-flex w-100 align-items-baseline justify-content-start">
                        <i
                          className={styles.markerStyle}
                          className="far fa-compass"
                        />
                        <div className="ml-3">
                          <p className="">{atVenueLocation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(CerritosMeetup);
