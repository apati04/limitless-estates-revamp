import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import ReactPlayer from 'react-player';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { isMobile } from 'react-device-detect';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import SelfDirectIra from './Sections/SelfDirectIra/SelfDirectIra';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import api from './api/resource_api';
import Modal from '../LandingPage/Modal';
// svg icons

const dashboardRoutes = [];

const styles = theme => ({
  ...landingPageStyle,
  ...productStyle,
  mainContainer: {
    ...landingPageStyle.container,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
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
  },
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%'
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});
const data = api.find(el => el.slug === 'self-directed-ira');
class IraContainer extends React.Component {
  renderContent = () => {
    const { classes } = this.props;
    if (isMobile) {
      return (
        <GridItem xs={12}>
          <Modal url={'https://apax714.wistia.com/medias/mtdamm7u8i'} />
        </GridItem>
      );
    }
    return (
      <GridItem xs={12} sm={12} md={6}>
        <div className={classes.playerWrapper}>
          <ReactPlayer
            className={classes.reactPlayer}
            url={'https://apax714.wistia.com/medias/mtdamm7u8i'}
            width="100%"
            height="100%"
          />
        </div>
      </GridItem>
    );

    /**
     *
            </GridContainer>
     */
  };
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
          <div className={classes.mainContainer}>
            <GridContainer className={classes.extraPadding} justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <h1 style={{ color: '#fff' }} className={classes.title}>
                  {data.title}
                </h1>
                <h4>{data.headline}</h4>
              </GridItem>
              {this.renderContent()}
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
