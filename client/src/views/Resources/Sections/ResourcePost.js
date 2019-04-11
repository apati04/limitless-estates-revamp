import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// @material-ui/icons
import Group from '@material-ui/icons/Group';
import Public from '@material-ui/icons/Public';
import Assessment from '@material-ui/icons/Assessment';

import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import InfoArea from 'components/InfoArea/InfoArea';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
const styles = theme => ({
  ...productStyle,
  title: {
    ...productStyle.title,
    textAlign: 'left'
  },
  description: {
    ...productStyle.description,
    textAlign: 'left'
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    width: 20,
    height: 20,
    verticalAlign: 'sub'
  },
  navLink: {
    '-webkit-text-decoration-line': 'none',
    textDecorationLine: 'none',
    color: 'rgba(0,0,0, 0.87)',
    fontWeight: 400
  }
});
class ResourcePost extends React.Component {
  loadPageDescription = () => {
    const { classes, pageDetail } = this.props;
    return pageDetail.pages.map((item, index) => (
      <h5 key={index} className={classes.description}>
        {item}
      </h5>
    ));
  };
  render() {
    const { classes, pageDetail } = this.props;
    console.log('page, :', pageDetail);
    return (
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
                {pageDetail.title}
              </Typography>
            </Breadcrumbs>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>{pageDetail.title}</h2>
            {this.loadPageDescription()}
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
                title="Community"
                description="Text about the meetups and how you are building a community through this lalalal placeholder text stuff leedlee leedle leee"
                icon={Group}
                iconColor="warning"
                vertical
              />
              <Button>Learn More</Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="stay connected"
                description="as a passive investor you are in full control and your opinions matter. something cheesy like that. say something about your webinars and Limitless Estates ability to be willing to listen. this icon section should target the potential investor"
                icon={Public}
                iconColor="info"
                vertical
              />
              <Button>Learn More</Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Strategy"
                description="Describe and talk about strategizing and how the process works. basically promoting the SelfDirected IRA. this section is targeted for super noobs"
                icon={Assessment}
                iconColor="success"
                vertical
              />
              <Button>Learn More</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResourcePost);
