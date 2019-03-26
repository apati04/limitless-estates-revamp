import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import blue from '@material-ui/core/colors/blue';
// custom styles
import TeamCard from '../../../../modules/TeamCard';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PageHeader from '../../Layouts/PageHeader';
import team from '../api/team';
import advisors from '../api/advisors';
const styles = theme => ({
  ...theme.teamStyles,
  ...theme.cardStyles,
  muiMainGrid: {
    marginRight: -15,
    marginLeft: -15,
    width: 'auto'
  },
  muiGridItem: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    padding: '0 15px',
    flexBasis: 'auto'
  },
  muiCardBody: {
    padding: '0.9375rem 1.875rem',
    flex: '1 1 auto'
  },
  muiCardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem'
  },
  muiCardHeader: {
    marginBottom: 0
  },
  muiIcon: {
    margin: theme.spacing.unit,
    '&:hover': {
      // backgroundColor: 'rgba(0,0,0,0.1)',
      backgroundColor: 'rgba(68,138,255,0.08)',
      color: blue['A200']
    }
  },
  appContainer: {
    ...theme.container
  }
});
const MeetTheTeam = props => {
  const { classes } = props;
  const headerimg = '/images/meet-the-team.jpg';
  return (
    <React.Fragment>
      <PageHeader
        imgSrc={headerimg}
        position="center center"
        imgHeight="560px"
      />
      <div className={classes.appContainer}>
        <section className={classes.section}>
          <Typography variant="h4" className={classes.title} paragraph>
            Meet The Team
          </Typography>
          <Grid container justify="center" className={classes.muiMainGrid}>
            {team.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={6}
                className={classes.muiGridItem}
              >
                <TeamCard
                  photo={item.avatar}
                  name={item.name}
                  title={item.title}
                  profilePage={item.profilePage}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </section>
        <Divider />
        <section className={classes.section}>
          <Typography variant="h4" className={classes.title} paragraph>
            Meet The Advisors
          </Typography>
          <Grid container justify="center" className={classes.muiMainGrid}>
            {advisors.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.muiGridItem}
              >
                <TeamCard
                  photo={item.photo.url}
                  name={item.name}
                  website={item.website}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </section>
      </div>
    </React.Fragment>
  );
};

MeetTheTeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MeetTheTeam);
