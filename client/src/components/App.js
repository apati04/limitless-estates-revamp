import React, { Component, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import { About, Contact, LongBeachMeetup, Phoenix, Podcast, Home, Tucson, Columbus, Resources } from './pages';
import WizardForm from './Questionnaire/WizardForm';
import ScrollToTop from '../util/ScrollToTop';
import withRoot from '../withRoot';
import NoSsr from '@material-ui/core/NoSsr';
// test routes delete after

// ---------------------------------
const LoadingMessage = () => 'Loading...';
class App extends Component {
	render() {
		return (
			<main>
				<NoSsr>
					<Router>
						<Navigation />
						<Suspense fallback={<LoadingMessage />}>
							<Switch>
								<ScrollToTop>
									<Route
										render={props => {
											return;
										}}
									/>
									<Route exact path="/" component={Home} />

									<Route exact path="/podcasts" component={Podcast} />
									<Route
										path="/about/:id"
										render={props => <About id={props.match.params.id} location={props.location} />}
									/>
									<Route exact path="/markets/tucson" component={Tucson} />
									<Route exact path="/markets/phoenix" component={Phoenix} />
									<Route exact path="/markets/columbus" component={Columbus} />
									<Route path="/investor/form" component={WizardForm} />

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
									<Route exact path="/contact-us" component={Contact} />
									<Route exact path="/events/meetups/longbeach" component={LongBeachMeetup} />
								</ScrollToTop>
							</Switch>
						</Suspense>
					</Router>
				</NoSsr>
			</main>
		);
	}
}

export default withRoot(App);
