import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import FeaturedEvent from './Sections/FeaturedEvent';
// @material-ui/icons
import { HashLink as Link } from 'react-router-hash-link';
// core components
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import EventListSection from './Sections/EventListSection';
const dashboardRoutes = [];
const styles = theme => ({
  ...landingPageStyle,
  section: {
    padding: '4.375rem 0',
    textAlign: 'center'
  },
  productTitle: {
    color: '#3C4858',
    textDecoration: 'none',
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginBottom: '1rem',
    marginTop: '1.875rem',
    minHeight: '2rem'
  },
  productDescription: {
    color: '#3C4043'
  },
  mainRaised: {
    ...landingPageStyle.mainRaised,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
});
class EventMain extends React.Component {
  state = {
    isFetching: true,
    isComplete: false,
    eventList: null,
    eventListLength: 0,
    eventObject: null,
    parsedSchedule: ''
  };
  componentDidMount() {
    const routeId = this.props.match.url;
    if (routeId === '/events/longbeach') {
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
      return;
    }
    if (routeId === '/events/cerritos') {
      axios.get('/events/meetups/cerritos').then(({ data }) => {
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
  }
  render() {
    const { classes, ...rest } = this.props;
    const { eventObject } = this.state;
    return (
      <div>
        {this.state.eventList ? (
          <React.Fragment>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              brand="true"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 200,
                color: 'white'
              }}
              {...rest}
            />
            <Parallax
              filter
              image={this.props.image || 'https://i.imgur.com/16LWH6o.jpg'}
            >
              <div className={classes.container}>
                <GridContainer className={classes.extraPadding}>
                  <GridItem xs={12} sm={12} md={8}>
                    <h1 className={classes.title}>{eventObject.name}</h1>
                    <h4 className={classes.description}>
                      Are you interested in the financial power of multifamily
                      real estate? Are you new to Real Estate investing but
                      don’t know how to start? Are you an experienced investor
                      with properties in LA but aren’t getting the returns you
                      desire? Are you interested in cash flow, value-add
                      properties, and opportunities outside of CA? Are you an
                      investor and looking for alternative ways to make money?
                      Are you an action taker looking for your next apartment
                      deal? If so come join us. We invest in apartments in
                      markets that simply make sense (or dollars!). Apartment
                      investing is a team sport. So come join the best team in
                      LA.
                    </h4>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                {/* <FeaturedEvent /> */}
                <div className={classes.section}>
                  <EventListSection
                    eventList={this.state.eventList}
                    schedule={this.state.parsedSchedule}
                  />
                </div>
              </div>
            </div>
            <Footer />
          </React.Fragment>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '90vh',
              maxHeight: '1000px'
            }}
          >
            <Fade in style={{ transformOrigin: '50 50 0' }} unmountOnExit>
              <CircularProgress />
            </Fade>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(EventMain));
