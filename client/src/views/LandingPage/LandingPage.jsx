import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import SubscribeSection from './Sections/SubscribeSection';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
// Sections for this page
import MainTeam from '../About/Sections/MainTeam';
import FeatureSection from './Sections/FeatureSection';
import ParallaxSection from './Sections/ParallaxSection';
import WorkWithUsForm from 'views/FormPages/WorkWithUsForm';
import DetailSection from './Sections/DetailSection';
import Modal from './Modal';

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
        <Parallax filter image={'https://i.imgur.com/oxwtIbj.jpg'}>
          <div className={classes.container}>
            <GridContainer className={classes.extraPadding}>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Limitless Estates</h1>
                <h4>
                  Our vision at Limitless Estates is to provide A-class living
                  to lower income housing by putting our residents first and
                  instilling a sense of community while inspiring others to do
                  the same.
                </h4>
                <br />
                <Modal url={'https://apax714.wistia.com/medias/pueh6irs0z'} />
                <Button
                  color="primary"
                  size="lg"
                  style={{ '@media(minWidth: 576px)': { marginLeft: '16px' } }}
                  component={props => <Link {...props} to="/investor" />}
                >
                  Investor Questionnaire
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div
            style={{
              background: '#f7f7f7',
              borderRadius: '6px'
            }}
          >
            <div className={classes.container}>
              <FeatureSection />
            </div>
          </div>
          <ParallaxSection
            image="https://i.imgur.com/vnCJr0J.jpg"
            title="Reasons to Invest in Multifamily"
          />
          <div className={classes.container}>
            <DetailSection />
          </div>
          <ParallaxSection
            image="https://i.imgur.com/kC8zbBM.jpg"
            title="Impact Investing"
            description="Impact investing enables investors to put their money to good use in meaningful, intelligent ventures that provide both a financial AND a social return on their investment."
          />
          <div className={classes.container}>
            <MainTeam />
          </div>
          <div
            style={{
              background: '#f7f7f7',
              borderBottomRadius: '6px'
            }}
          >
            <div className={classes.container}>
              <SubscribeSection
                title="Sign up to get your FREE"
                subHeader="Passive Investors Guide!"
              />
            </div>
          </div>
          <div className={classes.container}>
            <WorkWithUsForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
