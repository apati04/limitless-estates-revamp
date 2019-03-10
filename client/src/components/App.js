import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import {
  About,
  Contact,
  LongBeachMeetup,
  Faq,
  Phoenix,
  Podcast
} from './pages';
import withRoot from '../withRoot';
import Album from './album';
import Home from './Home/Home';
class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundColor: '#eaeaea' }}>
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
    );
  }
}

export default withRoot(App);
