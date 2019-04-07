import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.4.0';
// import * as Views from 'views/views';
// import ScrollToTop from 'util/ScrollToTop';
// import withRoot from 'withRoot';

// import Thankyou from './views/FormPages/Thankyou';
import LandingPage from 'views/LandingPage/LandingPage';
let hist = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>

            {/* <Route exact path="/" component={Thankyou} /> */}
            <Route exact path="/" component={LandingPage} />
          

        </Switch>
      </Router>
    );
  }
}
// asdfasdf
export default App;
//    <Route path="/podcasts" component={Views.Podcast} />
// <Route
//   path="/events/meetups/:id"
//   render={props => <Views.Events pathId={props.match.params.id} />}
// />
// <Route exact path="/profile/kyle-mitchell" component={Views.Kyle} />
// <Route
//   exact
//   path="/profile/lalita-patipaksiri"
//   component={Views.Lalita}
// />
// <Route path="/about" component={Views.About} />
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
// <Route path="/disclaimer" exact component={Views.Disclaimer} />
// <Route exact path="/contact-us" component={Views.Contact} />