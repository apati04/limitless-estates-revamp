import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from 'components/Card/Card';
import { Link } from 'react-router-dom';
import CardBody from 'components/Card/CardBody';
import InfoArea from 'components/InfoArea/InfoArea';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import { cardTitle } from 'assets/jss/material-kit-react.jsx';
import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';

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
    <Parallax filter small image={'https://i.imgur.com/oxwtIbj.jpg'}/>
          <div className={classes.container}>
        <div className={classNames(classes.main, classes.mainRaised)}>

          <InfoArea
            title="Why Invest In Multifamily"
            description={<span>We focus in multifamily apartment complexes because of the control it provides in determining the investments results...
              <Link to="/resources/why-invest-in-multifamily">Read More</Link>
            </span>}
            icon={() => <Card>asdf</Card>}
          />
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
