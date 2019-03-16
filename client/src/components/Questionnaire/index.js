import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    background: 'grey',
    height: 100 + 'vh'
  }
});

const Questionnaire = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <h1>hi</h1>
        </Grid>
      </Grid>
    </div>
  );
};

Questionnaire.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Questionnaire);
