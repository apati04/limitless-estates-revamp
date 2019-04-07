import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';

// Sections for this page
import ProductSection from './Sections/ProductSection';
import TeamSection from './Sections/TeamSection';
import WorkSection from './Sections/WorkSection';

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="https://i.imgur.com/wwmjzeX.png"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 360,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax filter image={'https://i.imgur.com/oxwtIbj.jpg'}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  Take Control of Your Investments
                </h1>
                <h4>
                  Our mission is to positively impact the lives of the people in
                  our local neighborhoods through impact investing while
                  achieving double digit returns for our investors.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
