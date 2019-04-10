import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.4.0';
import ScrollToTop from 'util/ScrollToTop';
import withRoot from 'withRoot';

// import Thankyou from './views/FormPages/Thankyou';
import LandingPage from 'views/LandingPage/LandingPage';
import ProfilePage from 'views/ProfilePage/ProfilePage';
import About from 'views/About/About';
import Markets from 'views/Markets/Markets';
import Resources from 'views/Resources/Resources';
import Disclaimer from 'views/Legal/Disclaimer';
import Contact from 'views/Contact/Contact';
import Events from 'views/Events/Events';
import Podcast from 'views/Podcast/Podcast';
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {/* <Route exact path="/" component={Thankyou} /> */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/profile/:id" component={ProfilePage} />
            <Route path="/podcasts" component={Podcast} />
            <Route path="/markets/:id" component={Markets} />
            <Route exact path="/about" component={About} />
            <Route path="/resources/:id" component={Resources} />
            <Route path="/events/meetups/:id" component={Events} />
            <Route exact path="/disclaimer" component={Disclaimer} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
//    <Route path="/podcasts" component={Views.Podcast} />
//
// <Route exact path="/profile/kyle-mitchell" component={Views.Kyle} />
// <Route
//   exact
//   path="/profile/lalita-patipaksiri"
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
