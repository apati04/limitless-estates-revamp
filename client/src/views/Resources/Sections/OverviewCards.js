import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
// @material-ui/icons
import Group from '@material-ui/icons/Group';
import Public from '@material-ui/icons/Public';
import Assessment from '@material-ui/icons/Assessment';

import Button from 'components/CustomButtons/Button';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import InfoArea from 'components/InfoArea/InfoArea';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import typographyStyle from 'assets/jss/material-kit-react/components/typographyStyle';
import api from '../api/resource_api';
const styles = theme => ({
  ...productStyle,
  ...typographyStyle
});
class OverviewCards extends React.Component {
  loadCards = () => {
    const { classes } = this.props;
    return api.map((item, index) => {
      return (
        <GridItem xs={12} sm={12} md={4} key={index + item.type}>
          <InfoArea
            title="Community"
            description="Text about the meetups and how you are building a community through this lalalal placeholder text stuff leedlee leedle leee"
            icon={() => (
              <img
                src={item.image}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
            )}
            iconColor="warning"
          />
          <Button>Learn More</Button>
        </GridItem>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>Overview</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              values. Keep you user engaged by providing meaningful information.
              Remember that by this time, the user is curious, otherwise he
              wouldn't scroll to get here. every one of these sections will lead
              to a page
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            {/* <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Inspire Others"
                description="this description should be about the podcast and should target the big players. the goal here is to attract partners, get people on your podcast or get your name around. the icon name is cast_connected"
                icon={CastConnected}
                iconColor="info"
                vertical
              />
            </GridItem> */}

            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="stay connected"
                description="as a passive investor you are in full control and your opinions matter. something cheesy like that. say something about your webinars and Limitless Estates ability to be willing to listen. this icon section should target the potential investor"
                icon={Public}
                iconColor="info"
              />
              <Button>Learn More</Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Strategy"
                description="Describe and talk about strategizing and how the process works. basically promoting the SelfDirected IRA. this section is targeted for super noobs"
                icon={Assessment}
                iconColor="success"
              />
              <Button>Learn More</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OverviewCards);
