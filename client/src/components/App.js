import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import {
  About,
  Contact,
  LongBeachMeetup,
  Faq,
  Phoenix,
  Podcast,
  Home
} from './pages';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';
// test routes delete after

// ---------------------------------
class App extends Component {
  render() {
    return (
      <NoSsr>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/podcasts" component={Podcast} />
              <Route exact path="/members/about" component={About} />
              <Route exact path="/markets/tucson" component={Phoenix} />
              <Route exact path="/markets/phoenix" component={Phoenix} />
              <Route exact path="/markets/columbus" component={Phoenix} />

              <Route exact path="/info/contact" component={Contact} />
              <Route
                exact
                path="/events/meetups/longbeach"
                component={LongBeachMeetup}
              />
              <Route exact path="/resources/faq" component={Faq} />
            </Switch>
          </div>
        </Router>
      </NoSsr>
    );
  }
}

export default withRoot(App);
