import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'assets/css/material-kit-react.min.css';
import ScrollToTop from 'util/ScrollToTop';

// import Thankyou from './views/FormPages/Thankyou';
import LandingPage from 'views/LandingPage/LandingPage';
import ProfilePage from 'views/ProfilePage/ProfilePage';
import About from 'views/About/About';
import Markets from 'views/Markets/Markets';
import Resources from 'views/Resources/Resources';
import Disclaimer from 'views/Legal/Disclaimer';
import Contact from 'views/Contact/Contact';
// import Events from 'views/Events/Events';
import Podcast from 'views/Podcast/Podcast';
import ResourceOverview from 'views/Resources/Sections/ResourceOverview';
import Investor from 'views/Investor/Investor';
import ErrorPage from 'views/ErrorPage/ErrorPage';
import MarketsOverview from 'views/Markets/MarketsOverview';
import IraContainer from 'views/Resources/IraContainer';
class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/podcasts" component={Podcast} />
          <Route exact path="/investor" component={Investor} />
          <Route exact path="/markets" component={MarketsOverview} />
          <Route path="/markets/:id" component={Markets} />
          <Route exact path="/about" component={About} />
          <Route exact path="/self-directed-ira" component={IraContainer} />
          <Route path="/resources/:id" component={Resources} />
          <Route exact path="/resources" component={ResourceOverview} />

          {/* <Route path="/events/meetups/:id" component={Events} /> */}
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={LandingPage} />
          <Route component={ErrorPage} />
        </Switch>
      </ScrollToTop>
    );
  }
}

export default App;
//    <Route path="/podcasts" component={Views.Podcast} />
//
// <Route exact path="/kyle" component={Views.Kyle} />
// <Route
//   exact
//   path="/profile/lalita"
//   component={Views.Lalita}
// />
//
// <Route path="/markets/:id" component={Views.Markets} />
// <Route exact path="/investor" component={Views.Investor} />
// <Route
//   path="/investor/questionnaire"
//   component={Views.Questionnaire}
// />
// <Route
//   exact
//   path="/resources/:id"
//   render={props => {
//     return (
//       <Views.Resources
//         currRouteId={props.match.params.id}
//         currLocation={props.location}
//       />
//     );
//   }}
// />
//
