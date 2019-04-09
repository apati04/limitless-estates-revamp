import React from 'react';
// nodejs library that concatenates classes
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import queryString from 'query-string';
import Quote from 'components/Typography/Quote';
// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import { withRouter } from 'react-router-dom';
import LBPage from './LBPage';
import Cerritos from './CerritosPage';
import i1 from './bg/i1.jpg';
import i2 from './bg/i2.jpg';
import i3 from './bg/i3.jpg';
import i4 from './bg/i4.jpg';
import i5 from './bg/i5.jpg';
import i6 from './bg/i6.jpg';
import i7 from './bg/i7.jpg';
import i8 from './bg/i8.jpg';
import meetupimg from './meetup.jpeg';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import imgfiftytwo from './Meetups/IMG_5286.jpg';
import FeatureSection from '../LandingPage/Sections/FeatureSection';
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
class Events extends React.Component {
  loadPage = e => {
    const {
      match: {
        params: { id }
      },
      location
    } = this.props;
    console.log('id', id, location);
    // switch (id) {
    //   case 'why-invest-in-multifamily':
    //     return <WhyInvest />;
    //   case 'impact-investing':
    //     return <div>impact-investing</div>;
    //   // case 'investing-risks':
    //   //   const pageNum = queryString.parse(location.search);

    //   //   if (pageNum.page === '2') {
    //   //     return <RisksTwo />;
    //   //   }
    //   //   return <div>{pageNum.page === '1' && <RisksOne />}</div>;
    //   // case 'self-direct-401k-ira':
    //   //   return <SelfDirect />;
    //   // case 'frequently-asked-questions':
    //   //   return <Faq />;
    //   default:
    //     return <div>no</div>;
    // }
  };

  render() {
    const { classes, match, ...rest } = this.props;
    let img;
    let currentRoute = match.params.id;
    if (currentRoute === 'longbeach') {
      console.log('yes');
      img = i4;
    }

    return (
      <React.Fragment>
        {currentRoute ? (
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
            <Parallax filter image={meetupimg}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1
                      style={{ textTransform: 'capitalize' }}
                      className={classes.title}
                    >
                      Investors Meetup
                    </h1>
                    <h4>
                      {currentRoute.snippet ||
                        'Long Beach, CA. Out-of-State Multifamily Apartment Investors Meetup. This group is for anyone interested in investing in out-of-state multifamily apartments.'}
                    </h4>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <FeatureSection />
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          // <Overview data={api} />
          <div>null</div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Events);
