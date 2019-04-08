import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import queryString from 'query-string';

// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';

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
    let img1 =
        'https://images.unsplash.com/photo-1419454073861-6e5bccea68ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
      img3 =
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    let img2 =
      'https://images.unsplash.com/photo-1516501312919-d0cb0b7b60b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1466&q=80';
    let title = match.params.id.split('-').join(' ');
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
        <Parallax filter image={'https://i.imgur.com/0g7OiIc.jpg'}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h1
                  style={{ textTransform: 'capitalize' }}
                  className={classes.title}
                >
                  {title}
                </h1>
                <h4>
                  Our mission is to positively impact the lives of the people in
                  our local neighborhoods through impact investing while
                  achieving double digit returns for our investors.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>sections</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Resources);
