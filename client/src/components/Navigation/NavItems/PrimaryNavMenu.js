import React from 'react';
import DropdownItem from './DropdownItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as navRoutes from '../routes';
import { withStyles } from '@material-ui/core/styles';

const dropdownItems = {
  About: (
    <DropdownItem
      key={'aboutkey'}
      title="About"
      listItems={[
        { title: 'Meet The Team', slug: '/about/meet-the-team' },
        { title: 'What we do', slug: '/about/what-we-do' },
        { title: 'Contact Us', slug: '/contact' }
      ]}
    />
  ),
  Markets: (
    <DropdownItem
      key={'marketskey'}
      title="markets"
      listItems={[
        { title: 'PHOENIX, AZ', slug: '/markets/phoenix-arizona' },
        { title: 'TUCSON, AZ', slug: '/markets/tucson-arizona' },
        { title: 'COLUMBUS, OH', slug: '/markets/columbus-ohio' }
      ]}
    />
  ),
  Resources: (
    <DropdownItem
      key={'resourceskey'}
      title="resources"
      listItems={[
        {
          title: 'WHY INVEST IN MULTIFAMILY',
          slug: '/resources/why-invest-in-multifamily'
        },
        {
          title: 'IMPACT INVESTING',
          slug: '/resources/impact-investing'
        },
        {
          title: 'Investing risks',
          slug: '/resources/investing-risks?page=1'
        },
        {
          title: 'SELF DIRECT 401K/IRA',
          slug: '/resources/self-direct-401k-ira'
        },

        {
          title: 'Frequently Asked Questions',
          slug: '/resources/frequently-asked-questions'
        }
      ]}
    />
  ),
  Events: (
    <DropdownItem
      key={'eventskey'}
      title="events"
      listItems={[
        {
          title: 'Multifamily Investors Meetup - long beach',
          slug: '/events/meetups/longbeach'
        },
        {
          title: 'Multifamily Investors Roundtable - cerritos',
          slug: '/events/meetups/cerritos'
        }
      ]}
    />
  )
};
const refactorUrl = {
  Home: navRoutes.HomeLink,
  About: { dropdown: true },
  Markets: { dropdown: true },
  Resources: { dropdown: true },
  Events: { dropdown: true },
  Podcast: navRoutes.PodcastLink,
  Contact: navRoutes.ContactLink
};

const styles = theme => ({
  imageStyles: {
    height: 'auto',
    marginBottom: '6px',
    width: '10em',
    display: 'inline-block'
  }
});
const PrimaryNavMenu = props => {
  const { classes } = props;
  const renderNavItems = () => {
    const keys = Object.keys(refactorUrl);
    return keys.map((item, index) => {
      if (refactorUrl[item].hasOwnProperty('dropdown')) {
        return dropdownItems[item];
      }
      return (
        <Button
          key={index + item}
          size="small"
          component={navRoutes[`${item}Link`]}
          color="inherit"
          variant="text"
          className={classes.root}
        >
          {item}
        </Button>
      );
    });
  };
  return (
    <Grid container justify="space-between" wrap="nowrap" alignItems="center">
      <Grid item xs={4}>
        <img
          alt="logo"
          src="https://i.imgur.com/IlUnKOe.png"
          className={classes.imageStyles}
        />
      </Grid>
      {renderNavItems()}
    </Grid>
  );
};

export default withStyles(styles)(PrimaryNavMenu);
