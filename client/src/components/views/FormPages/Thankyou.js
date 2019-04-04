import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Thankyou extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classNames('main-content')}>
          <Grid container>
            <Grid item xs>
              <Typography variant="h5">Thank You!</Typography>
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
