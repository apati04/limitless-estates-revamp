import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import queryString from 'query-string';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import ResourcePost from './Sections/ResourcePost';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import api from './api/resource_api';
import MultiPagePost from './Sections/MultiPagePost';
import Faq from './Pages/Faq/Faq';
import FeaturedCompany from 'views/Resources/Sections/FeaturedCompany';
const dashboardRoutes = [];
const styles = theme => ({
  ...landingPageStyle,
  customContainer: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      ...landingPageStyle.container
    }
  },
  mainRaised: {
    ...landingPageStyle.mainRaised,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      padding: 0
    }
  }
});
class Resources extends React.Component {
  loadPage = currentPage => {
    switch (currentPage.slug) {
      case 'why-invest-in-multifamily':
      case 'impact-investing':
        return <ResourcePost pageDetail={currentPage} />;
      case 'investing-risks':
        const pageNum = queryString.parse(this.props.location.search);
        return (
          <MultiPagePost pageNumber={pageNum.page} pageDetail={currentPage} />
        );
      case 'self-directed-ira':
        return <FeaturedCompany data={currentPage} />;
      case 'frequently-asked-questions':
        return <Faq />;
      default:
        return <div>no</div>;
    }
  };

  render() {
    const { classes, match, ...rest } = this.props;

    let title = match.params.id;
    let currentRoute = api.find(element => element.slug === title);
    console.log('curentRoute: ', currentRoute);
    let fullbg = false;
    if (
      title === 'frequently-asked-questions' ||
      title === 'self-directed-ira'
    ) {
      fullbg = true;
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
                height: 200,
                color: 'white'
              }}
              {...rest}
            />
            <Parallax filter small={!fullbg} image={currentRoute.image}>
              {fullbg ? (
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <h1 className={classes.title}>{currentRoute.title}</h1>
                    </GridItem>
                  </GridContainer>
                </div>
              ) : (
                <div />
              )}
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.customContainer}>
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
