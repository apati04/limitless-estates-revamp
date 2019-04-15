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
import Typography from '@material-ui/core/Typography';

import Button from 'components/CustomButtons/Button.jsx';
import ReactPlayer from 'react-player';

import InfoArea from 'components/InfoArea/InfoArea';
import Fade from '@material-ui/core/Fade';
import modalStyle from 'assets/jss/material-kit-react/modalStyle';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

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
import IraSvg from './Sections/SelfDirectIra/ira.svg';
import OneSvg from './Sections/SelfDirectIra/one.svg';
import TwoSvg from './Sections/SelfDirectIra/two.svg';
import ThreeSvg from './Sections/SelfDirectIra/three.svg';
import FourSvg from './Sections/SelfDirectIra/four.svg';
import SvgMain from './Sections/SelfDirectIra/refinancing.svg';


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
  ...modalStyle,
  ...productStyle,
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
const data = api.find(el => el.slug === 'self-directed-ira');
class IraContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  loadCard = () => {
    const { classes } = this.props;
    return data.pages.map(
      (
        { id, company, name, phone, address, logo, email, website, misc },
        index
      ) => {
        return (
          <GridItem key={id} xs={12} sm={12} md={4}>
            <Card
              style={{
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              className={classes.textLeft}
            >
              <img
                style={{ padding: '1rem 2rem' }}
                className={classes.imgCardTop}
                src={logo}
                alt="Card-img-cap"
                title={company}
              />

              <CardBody>
                <h4 className={classes.cardTitle}>{company}</h4>
                <p>{address}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <Button
                  simple
                  style={{
                    padding: 0,
                    textTransform: 'lowercase'
                  }}
                  color="primary"
                  size="lg"
                  href={website}
                >
                  {website}
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        );
      }
    );
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
          <div className={classes.container}>
            <GridContainer className={classes.extraPadding}>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{data.title}</h1>
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
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="Breadcrumb"
                  >
                    <NavLink className={classes.navLink} to="/resources">
                      <Typography style={{ color: '#337ab7' }} variant="body2">
                        All Resources
                      </Typography>
                    </NavLink>
                    <Typography color="textPrimary" variant="body2">
                      {data.title}
                    </Typography>
                  </Breadcrumbs>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classNames(classes.title)}>{data.snippet}</h2>
                  <h5 className={classes.description}>
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious, otherwise
                    he wouldn't scroll to get here. Add a button if you want the
                    user to see more.
                  </h5>
                </GridItem>
              </GridContainer>
              <GridContainer justify="space-around">
<GridItem xs={12} sm={12} md={6}>
<img src={SvgMain} alt="ira" title="Ira" />
</GridItem>
                <GridItem xs={12} sm={12} md={6} style={{textAlign: 'left'}}>
                  <InfoArea icon={(props) => <img {...props} src={OneSvg} />} iconColor="primary" title="Find a Custodian or Administrator" description="First, establish a self-directed IRA through an experienced custodian who is well-versed with the rules and regulations of such accounts. See our preferred partners below."
                  />
                   <InfoArea icon={(props) => <img {...props} src={TwoSvg} />} iconColor="info" title="Open a new IRA Account" description="Open an IRA account by filling out and signing the necessary documents" />
                  <InfoArea icon={(props) => <img {...props} src={ThreeSvg} />} iconColor="info" title="Fund the Account" description="You can fund your account by either executing rollover from your existing IRA — or your 401(k) or 403(b) account OR make a new contribution to your self directed IRA. You are now ready to invest!" />
                  <InfoArea icon={(props) => <img {...props} src={FourSvg} />} iconColor="success" title="Authorize and Submit a Purchase" description="After due diligence notify your custodian or administator about your investment and fill out the necessary documents" />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">{this.loadCard()}</GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(IraContainer);
