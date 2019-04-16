import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';

import columbus from './api/columbus_api';
import phoenix from './api/phoenix_api';
import tucson from './api/tucson_api';
import Main from './Main';
const styles = theme => ({
  ...landingPageStyle,
  mainRaised: {
    ...landingPageStyle.mainRaised,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginRight: '0'
    }
  }
});
const dashboardRoutes = [];

class Markets extends Component {
  loadHeader = () => {
    const { id } = this.props.match.params;
    const { classes } = this.props;
    let image, title;
    if (id === 'phoenix-arizona') {
      title = 'Investing in Phoenix';
      image = phoenix.headerImageUrl;
    } else if (id === 'tucson-arizona') {
      title = 'Investing in Tucson';
      image = tucson.headerImageUrl;
    } else {
      title = 'Investing in Columbus';
      image = columbus.headerImageUrl;
    }
    return <Parallax small filter image={image} />;
  };
  loadPage = () => {
    const { id } = this.props.match.params;
    switch (id) {
      case 'phoenix-arizona':
        return <Main api={phoenix} />;
      case 'tucson-arizona':
        return <Main api={tucson} />;
      default:
        return <Redirect to="/markets" />;
    }
  };
  render() {
    const { classes, match, ...rest } = this.props;
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

        {this.loadHeader()}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>{this.loadPage()}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Markets));
