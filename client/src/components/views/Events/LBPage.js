import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Parallax from '../Layouts/Parallax';
import landingStyles from '../About/modules/landingPage';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import AboutEvent from './Meetups/AboutEvent';

import placeholderImg from './placeholder.jpg';

import cardStyles from '../About/modules/landingPageSections/cardStyles';
import UpcomingEvents from './Meetups/UpcomingEvents/UpcomingEvents';

import axios from 'axios';

const styles = theme => ({
  ...cardStyles,
  ...landingStyles,
  root: {
    flexGrow: 1
  },
  gridContainer: {
    ...theme.gridContainer
  },
  gridItem: {
    ...theme.gridItem
  },
  appContainer: {
    ...theme.container
  },
  fontStyles: {
    color: 'white'
  },
  mobileContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: '0 8px',
      maxWidth: 'unset'
    }
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

    return (
      <React.Fragment>
        {this.state.isComplete && !this.state.isFetching ? (
          <React.Fragment>
            <Parallax filter image={placeholderImg}>
              <div className={classes.container}>
                <Grid container className={classes.gridContainer}>
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

                    <Button size="large" variant="contained" color="primary">
                      See signup
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Parallax>
            <div className={classNames(classes.mobileContainer, classes.main)}>
              <div
                className={classNames(
                  classes.container,
                  classes.mobileContainer
                )}
              >
                <AboutEvent />

                <a href="/auth/meetup">TEST LINK FOR SIGN UP</a>
                <UpcomingEvents
                  eventList={this.state.eventList}
                  eventSchedule={this.state.parsedSchedule}
                />
              </div>
            </div>
          </React.Fragment>
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
