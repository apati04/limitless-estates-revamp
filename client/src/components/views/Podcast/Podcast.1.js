import React, { Component } from 'react';
import './loader.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import PodcastContainer from './PodcastContainer';
import landingStyles from '../About/modules/landingPage';
import cardStyles from '../About/modules/landingPageSections/cardStyles';

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
    episodes: null,
    width: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    axios.get('/podcasts/podcast').then(result => {
      this.setState({ episodes: result.data.data });
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  handlePageView = () => {
    if (this.state.episodes === null) {
      return (
        <div className="loading">
          <div className="loader" />
        </div>
      );
    } else {
      return <PodcastContainer episodes={this.state.episodes} />;
    }
  };
  render() {
    return <div>{this.handlePageView()}</div>;
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Podcast);
