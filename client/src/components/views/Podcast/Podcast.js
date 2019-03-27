import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Parallax from '../Layouts/Parallax';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import placeholderImg from './placeholder.1.jpg';
import api from './podcast_api';
import Paper from '@material-ui/core/Paper';

import EpisodeGrid from './EpisodeGrid';
// import axios from 'axios';
// --------TEMP DATA
import podcastEpisodes from './tempdata';
// __ tmpdata
const styles = theme => ({
  podcastCard: {
    ...theme.cardTitle
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
    marginBottom: theme.spacing.unit * 16,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px 0 ${theme
      .spacing.unit * 4}px`
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
      <div className={classNames(classes.podcastGrid, classes.appContainer)}>
        <div>
          <Grid
            container
            justify="space-around"
            spacing={40}
            alignItems="flex-start"
            wrap="wrap"
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

        <EpisodeGrid episodes={this.state.episodes} />
      </div>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Podcast);
