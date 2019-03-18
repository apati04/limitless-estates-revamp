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
//-----------
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});
const steps = [
  'Basic Information',
  'Investor Information',
  'Review and Submit'
];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicInformation />;
    case 1:
      return <Info />;
    case 2:
      return <Review />;
    default:
      throw new Error('Something went Wrong');
  }
}
class InvestorForm extends Component {
  state = { activeStep: 0 };

  _handleNext = () => {
    this.setState(prevState => ({ activeStep: prevState + 1 }));
  };
  _handleBack = () => {
    this.setState(prevState => ({ activeStep: prevState - 1 }));
  };
  _handleReset = () => {
    this.setState({ activeStep: 0 });
  };
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography compontent="h1" variant="h4" align="center">
            Investor Questionnaire
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(item => (
              <Step key={item}>
                <StepLabel>{item}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  End of form title
                </Typography>
                <Typography variant="subtitle1">
                  end of form subtitle
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={this._handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    );
  }
}

InvestorForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvestorForm);
