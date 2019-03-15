import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: 20 + 'rem',
    position: 'relative',
    background: `url(https://i.imgur.com/vnCJr0J.jpg) no-repeat center`,
    backgroundSize: 'cover'
  },
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  headerText: {
    color: 'white',
    fontWeight: 300
  },
  headerContainer: {
    position: 'relative',
    height: '100%'
  },
  gridContainer: {
    height: '100%'
  }
});
const Section3 = props => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.overlayEffect} />
      <div className={classes.headerContainer}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item>
            <Typography variant="h2" paragraph className={classes.headerText}>
              Reasons to invest in multifamily
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Section3);
