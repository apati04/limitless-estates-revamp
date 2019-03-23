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
import { Link } from 'react-router-dom';
import placeholderImg from './placeholder.jpg';
import EventSchedule from './Meetups/EventSchedule';
import cardStyles from '../About/modules/landingPageSections/cardStyles';
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
  }
});

class EventPage extends Component {
  state = {
    isFetching: true,
    isComplete: false,
    eventList: null,
    eventListLength: 0,
    eventObject: null,
    parsedData: ''
  };
  componentDidMount() {
    axios.get('/events/meetups/lbc').then(({ data }) => {
      let parsedData = ReactHtmlParser(data.results[0].description);
      console.log(data);
      this.setState({
        isFetching: false,
        isComplete: true,
        eventList: data.results,
        eventListLength: data.resultslength,
        eventObject: data.results[0],
        parsedData
      });
    });
  }
  handleSignup = () => {
    axios
      .get('/auth/meetup')
      .then(response => {
        console.log('responseData: ', response.data);
      })
      .catch(error => console.log('react err: ', error));
  };
  render() {
    const { classes } = this.props;
    console.log('this.', this.state);
    return (
      <React.Fragment>
        <Parallax filter image={placeholderImg}>
          <div className={classes.container}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} sm={12} md={8}>
                <Typography variant="h1" paragraph className={classes.title}>
                  Multifamily Meetup <br /> Long Beach Chapter
                </Typography>

                <Typography
                  paragraph
                  variant="body1"
                  className={classes.fontStyles}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus, turpis vestibulum pulvinar ultrices, ante orci
                  convallis enim, vel finibus ipsum urna vitae orci. Vivamus id
                  <a href="https://4eb1b737.ngrok.io/auth/meetup">reserve</a>
                </Typography>
                <Button
                  size="large"
                  onClick={this.handleSignup}
                  variant="contained"
                  color="primary"
                >
                  See signup
                </Button>
              </Grid>
            </Grid>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutEvent />
            <EventSchedule />
            <Typography variant="h6">{this.state.parsedData}</Typography>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
