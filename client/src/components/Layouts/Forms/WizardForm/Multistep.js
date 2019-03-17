import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';

import WizardForm from './Wiz';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
});
const steps = ['Basic information', 'Investor Detail', 'Reivew and Submit'];
class Multistep extends Component {
  state = { activeStep: 0 };
  _back = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1 < 0 ? prevState.activeStep - 1 : 0
    }));
  };
  _next = () => {
    this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
  };
  _renderPage = props => {
    console.log('renderpage', props);
    const { activeStep } = this.state;
    const { formPages } = this.props;
    const pageHash = {};
    formPages.forEach((item, index) => {
      if (!pageHash[index]) {
        pageHash[index] = item;
      }
    });
    const Page = pageHash[activeStep];
    return (
      <Page
        {...props}
        navigateBack={this.navBack}
        navigateNext={this.navNext}
        activeStep={activeStep}
      />
    );
  };
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {this.props.formTitle}
          </Typography>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank yo ufor for filling out the form
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <WizardForm pages={this.props.formPages}>
                  {wizProps => (
                    <Formik
                      initialValues={this.props.initialState}
                      validationSchema={Yup.object().shape({
                        first: Yup.string().required('Name is required')
                      })}
                      onSubmit={(values, { setSubmitting }) => {
                        console.log('form submission: ', values);
                      }}
                    >
                      {props => {
                        const { handleSubmit } = props;
                        return (
                          <form onSubmit={handleSubmit}>
                            {wizProps.renderPage(props)}
                          </form>
                        );
                      }}
                    </Formik>
                  )}
                </WizardForm>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    );
  }
}

Multistep.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Multistep);
