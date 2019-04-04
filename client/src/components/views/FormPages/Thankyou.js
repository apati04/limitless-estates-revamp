import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Check from '@material-ui/icons/Check';
const styles = theme => ({
  appContainer: {
    ...theme.container
  },
  root: {
    flexGrow: 1
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  gridContainer: {
    ...theme.CustomGridContainer
  }
});

class Thankyou extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classNames(classes.appContainer, 'main-content')}>
          <Typography variant="h5">Thank You!</Typography>
          <Typography variant="body1">
            One of our members will get get back to you soon!
          </Typography>

          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            {/* <img
                src="https://i.imgur.com/IXYzVeW.jpg"
                alt="pdf"
                title="guide"
                width="300px"
                style={{
                  margin: '0 auto'
                }}
              /> */}
            <Grid item xs={12} sm={8}>
              <Paper classNames={classes.paper}>
                <Typography variant="h5" component="h3">
                  Interested in learning how to get started in learning about
                  being a passive investor?
                </Typography>
                <Typography component="p">
                  Every month we send out something advice from blah blah blah.
                  Don't know where to start in multifamily real estate
                  investing? Do you have 5 minutes every week to improve your
                  skill? Subcribe below. Or connect with us on Facebook,
                  LinkedIn, Google+
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Thankyou.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Thankyou);
