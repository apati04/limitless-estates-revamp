import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import api from './podcast_api';
import Episode from './Episodes/Episode';
import EpisodeGrid from './Episodes/EpisodeGrid';
// import axios from 'axios';
// --------TEMP DATA
import podcastEpisodes from './tempdata';
// __ tmpdata
const styles = theme => ({
  podcastCard: {
    ...theme.cardTitle
  },
  gridContainerPadding: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#f7f7f7'
  },
  appContainer: {
    ...theme.container,
    flexGrow: 1
  },
  fontStyles: {
    color: 'white'
  },
  podcastGrid: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 12,
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit *
      6}px 0px ${theme.spacing.unit * 6}px`
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
  }
});

class Podcast extends Component {
  state = {
    episodes: podcastEpisodes.data
  };
  componentDidMount() {
    console.log('mount');
    // axios.get('/podcasts/podcast').then(result => {
    //   this.setState({ episodes: result.data.data });
    // });
  }
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <React.Fragment>
        <div className={classNames(classes.podcastGrid, classes.appContainer)}>
          <Grid
            container
            justify="space-around"
            spacing={40}
            alignItems="flex-start"
            wrap="wrap"
            className={classes.gridContainerPadding}
          >
            <Grid item xs={12} sm={12} md={4}>
              <div>
                <img
                  src="https://i.imgur.com/TxnoBIK.jpg"
                  className={classes.imageStyle}
                  alt="podcast"
                  title="podcast"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Typography
                align="left"
                variant="h2"
                component="h1"
                className={classes.podcastCard}
              >
                Passive Income Through Multifamily Real Estate Investing
              </Typography>
              <Typography paragraph variant="body1" align="left">
                <em>With your hosts Kyle and Lalita</em>
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                className={classes.podcastSubtitle}
              >
                {api.description}
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Switch>
            <Route path="/podcasts/:epid" component={Episode} />
            <Route
              exact
              path="/podcasts"
              render={() => <EpisodeGrid episodes={this.state.episodes} />}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Podcast);
