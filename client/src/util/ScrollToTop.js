import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      return;
    }
    if (this.props.location.pathname === '/resources/investing-risks') {
      if (this.props.location.search === '?page=2') {
        window.scrollTo(0, 250);
        return;
      }
      if (this.props.location.search === '?page=1') {
        window.scrollTo(0, 0);
        return;
      }
    }
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default withRouter(ScrollToTop);
