import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
// @material-ui/icons

import Button from 'components/CustomButtons/Button';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import InfoArea from 'components/InfoArea/InfoArea';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import blue from '@material-ui/core/colors/blue';
const styles = theme => ({
  ...productStyle,
  iconSectionDiv: {
    border: '1px solid rgba(60,72,88,0.2)',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: 'rgba(60,72,88,0.1)'
    }
  }
});

class FeaturedEvent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>
              This group is for any interested in investing in out-of-state
              multifamily apartments.
            </h2>
            <h5 className={classes.description}>
              Are you interested in the financial power of multifamily real
              estate? Are you new to Real Estate investing but don’t know how to
              start? Are you an experienced investor with properties in LA but
              aren’t getting the returns you desire? Are you interested in cash
              flow, value-add properties, and opportunities outside of CA? Are
              you an investor and looking for alternative ways to make money?
              Are you an action taker looking for your next apartment deal? If
              so come join us. We invest in apartments in markets that simply
              make sense (or dollars!). Apartment investing is a team sport. So
              come join the best team in LA.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            {/* <GridItem xs={12} sm={12} md={3}>
              <div className={classes.iconSectionDiv}>
                <NavLink
                  className={classes.iconSection}
                  to="/resources/impact-investing"
                >
                  <InfoArea
                    title="Impacting Lives"
                    description=""
                    icon={childSvg}
                    iconColor="info"
                    vertical
                  />
                </NavLink>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Community Developement"
                description=""
                icon={usersSvg}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Inspire Others"
                description="as a passive investor you are in full control and your opinions matter. something cheesy like that. say something about your webinars and Limitless Estates ability to be willing to listen. this icon section should target the potential investor"
                icon={inspireSvg}
                iconColor="info"
                vertical
              />
              <Button>Learn More</Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Create Win Win Win Scenarios"
                description="Describe and talk about strategizing and how the process works. basically promoting the SelfDirected IRA. this section is targeted for super noobs"
                icon={trophySvg}
                iconColor="success"
                vertical
              />
              <Button>Learn More</Button>
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FeaturedEvent);
