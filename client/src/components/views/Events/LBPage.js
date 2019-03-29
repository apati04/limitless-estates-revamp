import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Parallax from '../Layouts/Parallax';

import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import AboutEvent from './Meetups/AboutEvent';
import EventMap from './modules/EventMap';
import placeholderImg from './placeholder.jpg';
import { HashLink as Link } from 'react-router-hash-link';

import UpcomingEvents from './Meetups/UpcomingEvents/UpcomingEvents';
import axios from 'axios';

const styles = theme => ({
  ...theme.cardStyles,
  ...theme.landingStyles,
  root: {
    flexGrow: 1
  },
  fontStyles: {
    color: 'white'
  },
  mobileContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: '0 8px',
      maxWidth: 'unset'
    }
  },
  imageStyle: {
    borderRadius: '24px',
    padding: '8px',
    width: '100%'
  },
  scheduleText: {
    color: 'rgba(0,0,0,0.8)'
  }
});

class EventPage extends Component {
  state = {
    isFetching: true,
    isComplete: false,
    eventList: null,
    eventListLength: 0,
    eventObject: null,
    parsedSchedule: ''
  };
  componentDidMount() {
    axios.get('/events/meetups/lbc').then(({ data }) => {
      let parsedSchedule = ReactHtmlParser(data.results[0].description);
      this.setState({
        isFetching: false,
        isComplete: true,
        eventList: data.results,
        eventListLength: data.resultslength,
        eventObject: data.results[0],
        parsedSchedule
      });
    });
  }
  render() {
    const { classes } = this.props;
    console.log('classes: ', classes);
    return (
      <React.Fragment>
        {this.state.isComplete && !this.state.isFetching ? (
          <div className="fade-in">
            <Parallax filter image={placeholderImg}>
              <div className={classes.container + ' main-content'}>
                <Grid container justify="space-between">
                  <Grid item xs={12} sm={12} md={8}>
                    <Typography
                      variant="h1"
                      paragraph
                      className={classes.title}
                    >
                      Multifamily Meetup <br /> Long Beach Chapter
                    </Typography>

                    <Typography
                      paragraph
                      variant="body1"
                      className={classes.fontStyles}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tempus, turpis vestibulum pulvinar ultrices, ante orci
                      convallis enim, vel finibus ipsum urna vitae orci.{' '}
                    </Typography>

                    <Button
                      size="large"
                      component={props => (
                        <Link
                          {...props}
                          to="/events/meetups/longbeach#schedule"
                          scroll={el =>
                            el.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                              inline: 'start'
                            })
                          }
                          offset={100}
                        />
                      )}
                      variant="contained"
                      color="primary"
                    >
                      See Schedule
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Parallax>
            <div className={classNames(classes.mobileContainer, classes.main)}>
              <div
                className={classNames(
                  classes.container,
                  classes.mobileContainer,
                  'main-content'
                )}
              >
                <AboutEvent />

                <a href="/auth/meetup">TEST LINK FOR SIGN UP</a>
                <hr className="hr-text" data-content="Meetup Schedule" />
                <Grid container justify="space-between" spacing={32}>
                  <Grid item xs={12} sm={6}>
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.09)'
                      }}
                    >
                      <img
                        src="/images/600.jpg"
                        alt="meetup"
                        title="meetup"
                        className={classes.imageStyle}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="h6"
                      align="left"
                      className={classes.scheduleText}
                    >
                      {this.state.parsedSchedule}
                    </Typography>
                  </Grid>
                </Grid>
                <div
                  id="schedule"
                  style={{
                    position: 'absolute',
                    marginTop: '-100px',
                    width: 0,
                    height: 0
                  }}
                />
                <UpcomingEvents
                  eventList={this.state.eventList}
                  eventHosts={this.state.eventObject.event_hosts}
                />
                <EventMap meetupLocation={this.state.eventObject.venue} />
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </React.Fragment>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
