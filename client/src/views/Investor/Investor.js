import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
// @material-ui/icons
// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import Questionnaire from './Questionnaire';

const dashboardRoutes = [];
const styles = theme => ({
    ...landingPageStyle,
    customContainer: {
        padding: 0,
        [theme.breakpoints.up('sm')]: {
            ...landingPageStyle.container,
        },
    },
    mainRaised: {
        ...landingPageStyle.mainRaised,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0,
            padding: 0,
        },
        background: '#fdfdfd',
    },
});
class Investor extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand="true"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white',
                    }}
                    {...rest}
                />
                <Parallax filter small image={'images/uni.jpg'} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.customContainer}>
                        <Questionnaire />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(Investor));
