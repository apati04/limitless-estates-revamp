import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Typography from '@material-ui/core/Typography';
import api from './podcast_api';
import Episode from './Episodes/Episode';
import EpisodeGrid from './Episodes/EpisodeGrid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import HeaderLinks from 'components/Header/HeaderLinks';

import Fade from '@material-ui/core/Grow';

import axios from 'axios';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import windowWidth from '../../util/windowWidth';
// --------TEMP DATA
// import podcastData from './tempdata';
// __ tmpdata
const dashboardRoutes = [];
const styles = theme => ({
  podcastCard: {
    ...theme.cardTitle,
    fontSize: '2.25rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.725rem'
    }
  },
  gridContainerPadding: {
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit
    }
  },
  appContainer: {
    ...theme.container,
    flexGrow: 1
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
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto'
  },
  imageStyle: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 8
    }
  },
  scheduleText: {
    color: 'rgba(0,0,0,0.8)'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    transition: theme.transitions.create('opacity')
  },
  podcastSubtitle: {
    marginTop: theme.spacing.unit * 4
  },
  socialBar: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  ...landingPageStyle,
  ...productStyle
});

class Podcast extends Component {
  state = {
    episodes: null,
    checked: true,
    fetching: null,
    intro: null
  };

  loadSocialBar = () => {
    return (
      <div>
        <Typography gutterBottom variant="caption">
          <em>Also available on:</em>
        </Typography>
        <div style={{ display: 'flex' }}>
          {api.media.map(item => {
            return (
              <Tooltip
                key={item.alt}
                title={item.alt}
                style={{ marginRight: '16px' }}
              >
                <a href={item.podcastUrl}>
                  <img
                    src={item.appLogo}
                    alt="logo"
                    title={item.alt}
                    width="40"
                  />
                </a>
              </Tooltip>
            );
          })}
        </div>
      </div>
    );
  };
  componentDidMount() {
    axios.get('/podcasts/podcast').then(result => {
      const [intro, ...rest] = result.data.data;
      this.setState({ intro, episodes: result.data.data, fetching: false });
    });
  }

  render() {
    const { classes, ...rest } = this.props;
    let isDesktop = true;
    if (this.props.location.pathname.split('/').filter(v => v).length > 1) {
      if (this.props.wWidth === null) {
        isDesktop = window.innerWidth > 500;
      } else {
        isDesktop = this.props.wWidth > 500;
      }
    }
    return (
      <div>
        <Header
          color="primary"
          routes={dashboardRoutes}
          brand="true"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <div className={classes.section}>
          {this.state.episodes ? (
            <Fade in style={{ transformOrigin: '0 0 0' }} unmountOnExit>
              <div
                style={{ marginBottom: '5rem' }}
                className={classes.container}>
                {isDesktop && 
                <Card className={classes.card}>
           
                  <CardBody
                    className={classes.cardBody}
                    style={{ padding: '2rem' }}
                  >
                    <GridContainer
                      justify="space-around"
                      spacing={32}
                      alignItems="flex-start"
                      wrap="wrap"
                    >
                      <GridItem xs={12} sm={12} md={4}>
                        <div>
                          <img
                            src="https://i.imgur.com/TxnoBIK.jpg"
                            className={classes.imageStyle}
                            alt="podcast"
                            title="podcast"
                          />
                        </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={8}>
                        <Typography
                          align="left"
                          variant="h3"
                          component="h1"
                          className={classes.podcastCard}
                        >
                          Passive Income Through Multifamily Real Estate
                          Investing
                        </Typography>

                        <Typography
                          align="left"
                          variant="subtitle1"
                          paragraph
                          className={classes.podcastSubtitle}
                        >
                          {api.description}
                        </Typography>

                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',

                            alignItems: 'center'
                          }}
                        >
                          {this.loadSocialBar()}
                        </div>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
                }
                <Switch>
                  <Route path="/podcasts/:epid" component={Episode} />
                  <Route
                    exact
                    path="/podcasts"
                    render={() => (
                      <EpisodeGrid episodes={this.state.episodes} />
                    )}
                  />
                </Switch>
              </div>
            </Fade>
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
        <Footer />
      </div>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(windowWidth(Podcast)));
