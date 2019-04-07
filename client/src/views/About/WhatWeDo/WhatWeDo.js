import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ImageGrid from '../../Layouts/ImageGrid';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  cardContent: {
    textAlign: 'center',
    margin: '0 auto'
  }
});

const Activities = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ width: '100%' }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <div
            style={{
              height: '400px',
              width: '100%',
              backgroundColor: '#eee'
            }}
          />
        </Grid>
      </Grid>
      <Card>
        <div className={classNames('main-content')}>
          <CardContent className={classes.cardContent}>
            <ImageGrid />
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

Activities.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Activities);
