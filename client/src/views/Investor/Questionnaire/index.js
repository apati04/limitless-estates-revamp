import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Questionnaire from './Questionnaire';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import Footer from 'components/Footer/Footer';

const styles = theme => ({
  ...productStyle,
  root: {
    flexGrow: 1
  },
  appContainer: {
    ...theme.container,
    margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit}px`,
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  }
});

const index = props => {
  const { classes } = props;

  return (
    <div className={classes.section}>
      <div className={classNames(classes.main)} id="start">
        <Questionnaire />
      </div>
      <Footer />
    </div>
  );
};

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
