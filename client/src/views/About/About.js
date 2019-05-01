import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MainTeam from './Sections/MainTeam';

// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

const dashboardRoutes = [];
const styles = theme => ({
  ...landingPageStyle,
  mainRaised: {
    ...landingPageStyle.mainRaised,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
});
class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="true"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax lightFilter image={'/images/meet-the-team.jpg'}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Meet the Team</h1>
                <h4>
                  Our wonderfull staff and advisors that make this possible
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MainTeam />
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
