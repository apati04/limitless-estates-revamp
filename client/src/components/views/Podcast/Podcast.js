import React, { Component } from 'react';
import './loader.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import PodcastContainer from './PodcastContainer';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appContainer: {
    ...theme.container
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