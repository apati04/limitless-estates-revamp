import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Parallax from '../Layouts/Parallax';
import landingStyles from '../About/modules/landingPage';
import Typography from '@material-ui/core/Typography';
import placeholderImg from './placeholder.1.jpg';
import cardStyles from '../About/modules/landingPageSections/cardStyles';

import axios from 'axios';
// --------TEMP DATA
import podcastEpisodes from './tempdata';
// __ tmpdata
const styles = theme => ({
  ...cardStyles,
  ...landingStyles,
  root: {
    flexGrow: 1
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

class Podcast extends Component {
  state = {
    episodes: null
  };
  componentDidMount() {
    console.log('mount');
    // axios.get('/podcasts/podcast').then(result => {
    //   this.setState({ episodes: result.data.data });
    // });
  }
  render() {
    const { classes } = this.props;
    console.log(this.state.episodes);
    return (
      <React.Fragment>
        <Parallax filter image={placeholderImg} />

        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <p>asdf</p>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Podcast);
