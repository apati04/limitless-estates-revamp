import React from 'react';
// @material-ui/core components
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
// core components
// core components

import Button from 'components/CustomButtons/Button.jsx';
import ReactPlayer from 'react-player';

import InfoArea from 'components/InfoArea/InfoArea';
import Fade from '@material-ui/core/Fade';
import modalStyle from 'assets/jss/material-kit-react/modalStyle';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import SelfDirectIra from './Sections/SelfDirectIra/SelfDirectIra';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import api from './api/resource_api';
// svg icons

const dashboardRoutes = [];
function Transition(props) {
  return <Fade in {...props} />;
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 20;
  const left = 23;

  return {
    top: `${top}%`,
    left: `${left}%`
  };
}
const styles = theme => ({
  ...landingPageStyle,

  ...productStyle,
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
const data = api.find(el => el.slug === 'self-directed-ira');
class IraContainer extends React.Component {
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
        <Parallax filter image={data.image}>
          <div className={classes.container}>
            <GridContainer className={classes.extraPadding}>
              <GridItem xs={12} sm={12} md={6}>
                <h1 style={{ color: '#fff' }} className={classes.title}>
                  {data.title}
                </h1>
                <h4>{data.headline}</h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <ReactPlayer
                  url={'https://apax714.wistia.com/medias/mtdamm7u8i'}
                  height="360px"
                  style={{ zIndex: 500 }}
                />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SelfDirectIra data={data} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(IraContainer);
