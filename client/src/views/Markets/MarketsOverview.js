import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import Header from 'components/Header/Header';

import { cardTitle } from 'assets/jss/material-kit-react.jsx';

import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import MarketsOverviewSection from './Sections/MarketsOverviewSection';

const styles = theme => ({
  ...landingPageStyle,
  ...componentsStyle,
  ...imagesStyles,
  mainRaised: {
    ...landingPageStyle.mainRaised,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  cardTitle,
  root: {
    flexGrow: 1
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  }
});
const dashboardRoutes = [];
class ResourceOverview extends React.Component {
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
        <Parallax filter small image={'https://i.imgur.com/oxwtIbj.jpg'} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MarketsOverviewSection />
          </div>
        </div>
      </div>
    );
  }
}

ResourceOverview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResourceOverview);
