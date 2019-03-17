import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
// form style components
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//---- form pages
import BasicInformation from './FormPage/BasicInformation';
import Info from './FormPage/Info';
import Review from './FormPage/Review';
//----------
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class InvestorForm extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>{/* investor form */} test</div>;
  }
}

InvestorForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvestorForm);
