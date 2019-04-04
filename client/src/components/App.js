import React, { Component, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import * as Views from './views/views';
import ScrollToTop from '../util/ScrollToTop';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Navigation />

          <div style={{ marginBottom: '7rem' }} className="app-main">
            <NoSsr>
              <Switch>
                <ScrollToTop>
                  <Route exact path="/" component={Views.Home} />
                  <Route path="/podcasts" component={Views.Podcast} />

                  <Route
                    path="/events/meetups/:id"
                    render={props => (
                      <Views.Events pathId={props.match.params.id} />
                    )}
                  />
                  <Route
                    exact
                    path="/profile/kyle-mitchell"
                    component={Views.Kyle}
                  />
                  <Route
                    exact
                    path="/profile/lalita-patipaksiri"
                    component={Views.Lalita}
                  />
                  <Route path="/about" component={Views.About} />
                  <Route path="/markets/:id" component={Views.Markets} />
                  <Route exact path="/investor" component={Views.Investor} />
                  <Route
                    path="/investor/questionnaire"
                    component={Views.Questionnaire}
                  />
                  <Route
                    exact
                    path="/resources/:id"
                    render={props => {
                      return (
                        <Views.Resources
                          currRouteId={props.match.params.id}
                          currLocation={props.location}
                        />
                      );
                    }}
                  />
                  <Route exact path="/contact-us" component={Views.Contact} />
                </ScrollToTop>
              </Switch>
            </NoSsr>
          </div>
        </Suspense>
      </Router>
    );
  }
}
// asdfasdf
export default withRoot(App);
