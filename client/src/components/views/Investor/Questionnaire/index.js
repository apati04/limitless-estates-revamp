import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Questionnaire from './Questionnaire';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appContainer: {
    ...theme.container,
    margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit}px`
  }
});

const index = props => {
  const { classes } = props;

  return (
    <div className={classes.root + ' main-content'}>
      <div style={{ height: '100px', background: '#e7e7e7' }} />
      <div className={classNames(classes.appContainer)}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item xs={12} md={8}>
            <Card style={{ padding: '1.5rem' }}>
              <CardContent>
                <Questionnaire />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);