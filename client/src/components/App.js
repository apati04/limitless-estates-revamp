import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import * as Views from './views/views';
import ScrollToTop from '../util/ScrollToTop';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';
import Zoom from '@material-ui/core/Zoom';
class App extends Component {
  render() {
    return (
      <div className="mainContent">
        <Router>
          <Navigation />
          <NoSsr>
            <Zoom style={{ transitionDelay: '500ms' }}>
              <Switch>
                <ScrollToTop>
                  <Route exact path="/" component={Views.Home} />

                  <Route exact path="/podcasts" component={Views.Podcast} />
                  <Route
                    path="/events/meetups/:id"
                    render={props => (
                      <Views.Events pathId={props.match.params.id} />
                    )}
                  />
                  {/* <Route
											path="/about/:id"
											render={props => (
												<Views.About id={props.match.params.id} location={props.location} />
											)}
										/> */}
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
                  <Route path="/investor/form" component={Views.InvestorForm} />

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
            </Zoom>
          </NoSsr>
        </Router>
      </div>
    );
  }
}

export default withRoot(App);
