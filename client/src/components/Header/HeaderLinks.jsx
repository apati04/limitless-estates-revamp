/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link, Redirect } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
// @material-ui/icons
import {
  Apps,
  Headset,
  LibraryBooks,
  Timeline,
  Mail,
  DateRange,
  Group,
  Home,
  Build,
  Explore,
  Phone
} from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Hidden from '@material-ui/core/Hidden';

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';
const ResourcesMain = props => <Link to="/resources" {...props} />;
function HeaderLinks({ ...props }) {
  const { classes } = props;

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          component={props => <Link {...props} to="/" />}
          color="transparent"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={props => <Link {...props} to="/about" />}
          color="transparent"
          className={classes.navLink}
        >
          <Group className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Markets"
          dropdownHeader="Arizona"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Timeline}
          dropdownList={[
            <Link to="/markets/tucson-arizona" className={classes.dropdownLink}>
              Tucson, Arizona
            </Link>,
            <Link
              to="/markets/phoenix-arizona"
              className={classes.dropdownLink}
            >
              Phoenix, Arizona
            </Link>
            // { divider: true },
            // <Link to="/markets/overview" className={classes.dropdownLink}>
            //   Overview
            // </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Learn"
          dropdownHeader="Resources"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Explore}
          dropdownList={[
            <Link
              to="/resources/why-invest-in-multifamily"
              className={classes.dropdownLink}
            >
              Why Invest in Multifamily
            </Link>,

            <Link
              to="/resources/impact-investing"
              className={classes.dropdownLink}
            >
              What is Impact Investing
            </Link>,
            ,
            <Link to="/self-directed-ira" className={classes.dropdownLink}>
              Self-Directed IRA
            </Link>,

            <Link
              to="/resources/investing-risks?page=1"
              className={classes.dropdownLink}
            >
              Investing Risks
            </Link>,

            <Link
              to="/resources/frequently-asked-questions"
              className={classes.dropdownLink}
            >
              Frequently Asked Questions
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Events"
          dropdownHeader="Hosted on Meetup.com"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={DateRange}
          dropdownList={[
            <Link to="/events/longbeach" className={classes.dropdownLink}>
              Multifamily Apartment Investors Meetup - Long Beach
            </Link>,
            <Link to="/events/cerritos" className={classes.dropdownLink}>
              Cerritos Multifamily Investors Roundtable
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={props => <Link {...props} to="/podcasts" />}
          color="transparent"
          className={classes.navLink}
        >
          <Headset className={classes.icons} /> Podcast
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          href="https://ehypauluugknktzawdwva-free.10to8.com/"
        >
          <Phone className={classes.icons} /> Schedule a Call
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
