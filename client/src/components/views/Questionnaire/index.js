import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Questionnaire from './Questionnaire';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appContainer: {
    ...theme.container
  }
});

const index = props => {
  const { classes } = props;

  return (
    <div className={classes.root + ' main-content'}>
      <div style={{ height: '300px', background: '#e7e7e7' }} />
      <div className={classNames(classes.appContainer, 'main-content')}>
        <Questionnaire />
      </div>
    </div>
  );
};

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
