import React from 'react';
// nodejs library that concatenates classes
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Overview from './Sections/ResourceOverview';
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
import WhyInvest from './Sections/WhyInvest';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import api from './api/resource_api';
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
class Resources extends React.Component {
  loadPage = currentPage => {
    const {
      match: {
        params: { id }
      },
      location
    } = this.props;
    console.log('id', id, location);
    if (currentPage.slug === 'why-invest-in-multifamily') {
      return <WhyInvest pageDetail={currentPage} />;
    }
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

    let title = match.params.id;
    console.log(title);
    let currentRoute = api.find(element => element.slug === title);

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
                height: 200,
                color: 'white'
              }}
              {...rest}
            />
            <Parallax filter small image={currentRoute.image} />
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                {this.loadPage(currentRoute)}
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Resources);
