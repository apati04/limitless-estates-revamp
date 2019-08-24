import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';
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
import ResourceOverview from 'views/Resources/Sections/ResourceOverview';
import Investor from 'views/Investor/Investor';
import ErrorPage from 'views/ErrorPage/ErrorPage';
import MarketsOverview from 'views/Markets/MarketsOverview';
import IraContainer from 'views/Resources/IraContainer';
import CerritosPage from 'views/Events/CerritosPage';
import LongBeachPage from 'views/Events/LBPage';
import PhoenixPage from 'views/Events/PhoenixPage';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';

import SuccessPage from 'views/SuccessPage/SuccessPage';
import Podcast from 'views/Podcast/Podcast';
import MediaContainer from 'views/Media/MediaContainer';
import Button from 'components/CustomButtons/Button';
import headerStyles from 'assets/jss/material-kit-react/components/headerStyle';
import headerLinkStyles from 'assets/jss/material-kit-react/components/headerLinksStyle';

const styles = {
    topHeader: {
        ...headerLinkStyles,
        ...headerStyles,
        background: 'rgba(0, 0, 0, 0.99)',
        textAlign: 'right',

        zIndex: '1200'
    }
}
class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <BrowserRouter>
                <div>
                    <div className={classes.topHeader}>
                        <div style={{ maxWidth: '97%', paddingLeft: '6px', paddingRight: '6px' }}>
                            <Typography style={{ fontSize: '10px' }} variant="overline">
                                <a style={{ color: 'white' }} href="https://investor.passiveincomemultifamily.com/login" target="_blank" rel="noopener noreferrer">Investor Login</a>
                            </Typography>
                        </div>

                    </div>

                    <SnackbarProvider>
                        <ScrollToTop>
                            <Switch>
                                <Redirect
                                    from="/info/questionnaire"
                                    to="/investor"
                                />
                                <Redirect from="/info/contact" to="/contact" />
                                <Redirect
                                    from="/events/meetups"
                                    to="/events/longbeach"
                                />
                                <Route
                                    path="/profile/:id"
                                    component={ProfilePage}
                                />
                                <Route path="/podcasts" component={Podcast} />
                                <Route
                                    exact
                                    path="/investor"
                                    component={Investor}
                                />
                                <Route
                                    path="/media"
                                    exact
                                    component={MediaContainer}
                                />
                                <Route
                                    exact
                                    path="/markets"
                                    component={MarketsOverview}
                                />
                                <Route path="/markets/:id" component={Markets} />
                                <Route exact path="/about" component={About} />
                                <Route
                                    exact
                                    path="/self-directed-ira"
                                    component={IraContainer}
                                />
                                <Route
                                    path="/resources/:id"
                                    component={Resources}
                                />
                                <Route
                                    exact
                                    path="/resources"
                                    component={ResourceOverview}
                                />
                                <Route
                                    exact
                                    path="/events/cerritos"
                                    component={CerritosPage}
                                />
                                <Route
                                    exact
                                    path="/events/longbeach"
                                    component={LongBeachPage}
                                />
                                <Route
                                    exact
                                    path="/events/phoenix"
                                    component={PhoenixPage}
                                />
                                <Route
                                    exact
                                    path="/thankyou"
                                    component={SuccessPage}
                                />
                                {/* <Route path="/events/meetups/:id" component={Events} /> */}
                                <Route
                                    exact
                                    path="/disclaimer"
                                    component={Disclaimer}
                                />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/" component={LandingPage} />
                                <Route component={ErrorPage} />
                            </Switch>
                        </ScrollToTop>
                    </SnackbarProvider>
                </div>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);
