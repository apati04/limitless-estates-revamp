/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

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
  Build
} from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';

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
            </Link>,
            <Link to="/markets/columbus-ohio" className={classes.dropdownLink}>
              Columbus, Ohio
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Resources"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Build}
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
            <Link
              to="/resources/self-directed-ira"
              className={classes.dropdownLink}
            >
              Self-Directed IRA
            </Link>,
            <Link
              to="/resources/investing-risks?page=1"
              className={classes.dropdownLink}
            >
              Investing Risks
            </Link>,
            <Link
              to="/resources/frequently-answered-questions"
              className={classes.dropdownLink}
            >
              Frequently Answered Questions
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Events"
          dropdownHeader="Meetups"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={DateRange}
          dropdownList={[
            <Link
              to="/events/meetups/longbeach"
              className={classes.dropdownLink}
            >
              Out of State Apartment Investing Mastermind Long Beach Chapter
            </Link>,
            <Link
              to="/events/meetups/cerritos"
              className={classes.dropdownLink}
            >
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
          component={props => <Link {...props} to="/contact-us" />}
          color="transparent"
          className={classes.navLink}
        >
          <Mail className={classes.icons} /> Contact
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
