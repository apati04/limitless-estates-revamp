import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import InfoArea from 'components/InfoArea/InfoArea';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';

import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import Button from 'components/CustomButtons/Button';
import OneSvg from './one.svg';
import TwoSvg from './two.svg';
import ThreeSvg from './three.svg';
import FourSvg from './four.svg';
import SvgMain from './refinancing.svg';
import api from '../../api/resource_api';
const styles = theme => ({
  ...productStyle
});
const data = api.find(el => el.slug === 'self-directed-ira');

class SelfDirectIraSection extends React.Component {
  loadCard = () => {
    const { classes } = this.props;
    return data.pages.map(
      (
        { id, company, name, phone, address, logo, email, website, misc },
        index
      ) => {
        return (
          <GridItem key={id} xs={12} sm={12} md={6}>
            <Card className={classes.textLeft}>
              <img
                style={{ padding: '1rem 2rem', width: '100%' }}
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
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>
              Get Started in Four Simple Steps
            </h2>
          </GridItem>
        </GridContainer>
        <div style={{ margin: '64px 0' }} />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={SvgMain}
              style={{
                width: '100%',

                '@media (max-width: 576px)': {
                  maxWidth: '480px'
                }
              }}
              alt="ira"
              title="Ira"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: 'left' }}>
            <InfoArea
              icon={props => (
                <img {...props} src={OneSvg} alt="step1" title="stepOne" />
              )}
              iconColor="primary"
              title="Find a Custodian or Administrator"
              description="First, establish a self-directed IRA through an experienced custodian who is well-versed with the rules and regulations of such accounts. See our preferred partners below."
            />
            <InfoArea
              icon={props => (
                <img {...props} src={TwoSvg} alt="step2" title="stepTwo" />
              )}
              iconColor="info"
              title="Open a new IRA Account"
              description="Open an IRA account by filling out and signing the necessary documents"
            />
            <InfoArea
              icon={props => (
                <img {...props} src={ThreeSvg} alt="step3" title="stepThree" />
              )}
              iconColor="info"
              title="Fund the Account"
              description="You can fund your account by either executing rollover from your existing IRA — or your 401(k) or 403(b) account OR make a new contribution to your self directed IRA. You are now ready to invest!"
            />
            <InfoArea
              icon={props => (
                <img {...props} src={FourSvg} alt="step3" title="stepThree" />
              )}
              iconColor="success"
              title="Authorize and Submit a Purchase"
              description="After due diligence notify your custodian or administator about your investment and fill out the necessary documents"
            />
          </GridItem>
        </GridContainer>
        <div style={{ margin: '128px 0' }} />

        <h2 className={classes.title}>Our Preferred Partners</h2>

        <GridContainer justify="center">{this.loadCard()}</GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(SelfDirectIraSection);
