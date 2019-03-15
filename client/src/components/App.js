import React, { Component, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import {
  About,
  Contact,
  LongBeachMeetup,
  Phoenix,
  Podcast,
  Home,
  Tucson,
  Columbus,
  Resources
} from './pages';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';
// test routes delete after

// ---------------------------------
const LoadingMessage = () => 'Loading...';
class App extends Component {
  render() {
    return (
      <NoSsr>
        <Router>
          <div>
            <Route render={props => { return <Navigation currLocation={props.location} /> }} />

            <Suspense fallback={<LoadingMessage />}>
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/podcasts" component={Podcast} />
                <Route exact path="/about/team" component={About} />
                <Route exact path="/markets/tucson" component={Tucson} />
                <Route exact path="/markets/phoenix" component={Phoenix} />
                <Route exact path="/markets/columbus" component={Columbus} />
                <Route
                  exact
                  path="/resources/:id"
                  render={props => {
                    return (
                      <Resources
                        currRouteId={props.match.params.id}
                        currLocation={props.location}
                      />
                    );
                  }}
                />
                <Route exact path="/info/contact" component={Contact} />
                <Route
                  exact
                  path="/events/meetups/longbeach"
                  component={LongBeachMeetup}
                />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </NoSsr>
    );
  }
}

export default withRoot(App);
