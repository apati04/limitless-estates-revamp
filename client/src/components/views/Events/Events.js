import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter, Redirect } from 'react-router-dom';
import LongBeach from './Meetups/LongBeach';
import Cerritos from './Meetups/Cerritos';

class EventsContainer extends Component {
  loadPage = () => {
    const { id } = this.props.match.params;
    switch (id) {
      case 'longbeach':
        return <LongBeach />;
      case 'cerritos':
        return <Cerritos />;
      default:
        return <div>overview</div>;
    }
  };

  render() {
    return <React.Fragment>{this.loadPage()}</React.Fragment>;
  }
}

EventsContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(EventsContainer);
