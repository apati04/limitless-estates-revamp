import React, { Component, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import * as Views from './views/views';
import ScrollToTop from '../util/ScrollToTop';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';
import Thankyou from './views/FormPages/Thankyou';
import Footer from './Navigation/Footer/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Navigation />
          <div style={{ paddingTop: '4rem' }} className="app-main">
            <NoSsr>
              <Switch>
                <ScrollToTop>
                  {/* <Route exact path="/" component={Thankyou} /> */}
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
                  <Route
                    path="/disclaimer"
                    exact
                    component={Views.Disclaimer}
                  />
                  <Route exact path="/contact-us" component={Views.Contact} />
                </ScrollToTop>
              </Switch>
            </NoSsr>
          </div>
          <Footer />
        </Suspense>
      </Router>
    );
  }
}
// asdfasdf
export default withRoot(App);
