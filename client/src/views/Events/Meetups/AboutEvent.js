import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventGrid from './EventGrid';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  mainTitle: {
    fontSize: 36
  }
});

const AboutEvent = props => {
  const { classes } = props;

  return (
    <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={10}>
          <Typography
            component="h2"
            paragraph
            className={classNames(classes.title, classes.mainTitle)}
          >
            What we're all about
          </Typography>
          <div />
          <Typography variant="body2" paragraph className={classes.description}>
            This group is for any interested in investing in out-of-state
            multifamily apartments.
          </Typography>
          <Typography variant="body2" paragraph className={classes.description}>
            Are you interested in the financial power of multifamily real
            estate? Are you new to Real Estate investing but don’t know how to
            start? Are you an experienced investor with properties in LA but
            aren’t getting the returns you desire? Are you interested in cash
            flow, value-add properties, and opportunities outside of CA? Are you
            an investor and looking for alternative ways to make money? Are you
            an action taker looking for your next apartment deal? If so come
            join us. We invest in apartments in markets that simply make sense
            (or dollars!). Apartment investing is a team sport. So come join the
            best team in LA.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <EventGrid />
        </Grid>
      </Grid>
    </div>
  );
};

AboutEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutEvent);
