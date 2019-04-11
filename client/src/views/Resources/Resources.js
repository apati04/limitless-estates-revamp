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
const dashboardRoutes = [];
const styles = theme => ({
  ...landingPageStyle,
  customContainer: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      ...landingPageStyle.contianer
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
        // if (pageNum.page === '2') {
        //   return <MultiPagePost pageDetail={currentPage} />;
        // }
        return (
          <MultiPagePost pageNumber={pageNum.page} pageDetail={currentPage} />
        );
      // case 'self-direct-401k-ira':
      //   return <SelfDirect />;
      case 'frequently-asked-questions':
        return <Faq />;
      default:
        return <div>no</div>;
    }
  };

  render() {
    const { classes, match, ...rest } = this.props;

    let title = match.params.id;
    console.log(title);
    let currentRoute = api.find(element => element.slug === title);
    let fullbg = false;
    if (title === 'frequently-asked-questions') {
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
              {title === 'frequently-asked-questions' ? (
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
