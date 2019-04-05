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
        { title: 'Phoenix, AZ', slug: '/markets/phoenix-arizona' },
        { title: 'Tucson, AZ', slug: '/markets/tucson-arizona' },
        { title: 'Columbus, OH', slug: '/markets/columbus-ohio' }
      ]}
    />
  ),
  Resources: (
    <DropdownItem
      key={'resourceskey'}
      title="Discover"
      listItems={[
        {
          title: 'Why Invest In Multifamily',
          slug: '/resources/why-invest-in-multifamily'
        },
        {
          title: 'Impact Investing',
          slug: '/resources/impact-investing'
        },
        {
          title: 'Investing Risks',
          slug: '/resources/investing-risks?page=1'
        },
        {
          title: 'Self Direct 401k/Ira',
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
          subheader: 'Long Beach, CA',
          title: 'Multifamily Investors Meetup',
          slug: '/events/meetups/longbeach'
        },
        {
          subheader: 'Cerritos, CA',
          title: 'Multifamily Investors Roundtable',
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
    height: '4rem',
    paddingBottom: '6px',
    width: 'auto',
    display: 'block'
  },
  container: {
    ...theme.container
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
    <div style={{ width: '100%' }} className={classes.container}>
      <Grid
        container
        spacing={0}
        justify="space-between"
        wrap="nowrap"
        alignItems="center"
      >
        <Grid item xs>
          <img
            alt="logo"
            src="https://i.imgur.com/wwmjzeX.png"
            className={classes.imageStyles}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="flex-end" wrap="nowrap">
            {renderNavItems()}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(PrimaryNavMenu);
