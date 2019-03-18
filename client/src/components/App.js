import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import * as Views from './views';
import ScrollToTop from '../util/ScrollToTop';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';
// test routes delete after

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<Router>
						<Navigation />

						<Switch>
							<ScrollToTop>
								<NoSsr>
									<Route exact path="/" component={Views.Home} />

									<Route exact path="/podcasts" component={Views.Podcast} />
									{/* <Route
											path="/about/:id"
											render={props => (
												<Views.About id={props.match.params.id} location={props.location} />
											)}
										/> */}
									<Route path="/about" component={Views.About} />
									<Route exact path="/markets/tucson" component={Views.Tucson} />
									<Route exact path="/markets/phoenix" component={Views.Phoenix} />
									<Route exact path="/markets/columbus" component={Views.Columbus} />
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
									<Route exact path="/events/meetups/longbeach" component={Views.LongBeachMeetup} />
								</NoSsr>
							</ScrollToTop>
						</Switch>
					</Router>
				</main>
				{/* <Footer /> */}
			</React.Fragment>
		);
	}
}

export default withRoot(App);
