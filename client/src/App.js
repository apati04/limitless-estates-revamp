import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {/* <Route exact path="/" component={Thankyou} /> */}

            <Route path="/profile/:id" component={ProfilePage} />
            <Route path="/podcasts" component={Podcast} />

            <Route path="/markets/:id" component={Markets} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={ResourceOverview} />
            <Route exact path="/resources/:id" component={Resources} />
            {/* <Route path="/events/meetups/:id" component={Events} /> */}
            <Route exact path="/disclaimer" component={Disclaimer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </ScrollToTop>
      </Router>
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
