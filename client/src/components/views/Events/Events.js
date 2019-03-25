import React, { Component } from 'react';

import { withRouter, Redirect } from 'react-router-dom';
import LBPage from './LBPage';
import Cerritos from './Meetups/Cerritos/Cerritos';

class EventsContainer extends Component {
  loadPage = () => {
    const { id } = this.props.match.params;
    switch (id) {
      case 'longbeach':
        return <LBPage />;
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

export default withRouter(EventsContainer);
