import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Formik } from 'formik';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
const styles = theme => ({
  button: {
    width: '100%',
    margin: '1em',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    paddingTop: '0.75em',
    paddingBottom: '0.75em',

    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit * 2
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary['A100'],
    overflow: 'hidden',

    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing.unit * 2}px`
  },
  smallContainer: {
    width: '60%'
  },
  bigContainer: {
    width: '80%'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  stepGrid: {
    width: '80%'
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  stepper: {
    backgroundColor: 'transparent'
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    paddingBottom: 24,
    marginBottom: 24
  },
  flexBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center'
  }
});

class Wizard extends Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      bag.setSubmitting(false);
      this.next(values);
    }
  };

  render() {
    const steps = ['page 1', 'page 2', 'page 3'];
    const { children, classes } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={24}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <Grid item xs={12}>
              <div className={classes.stepContainer}>
                <div className={classes.bigContainer}>
                  <Stepper
                    classes={{ root: classes.stepper }}
                    activeStep={page}
                    alternativeLabel
                  >
                    {steps.map(label => {
                      return (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>
                <Formik
                  initialValues={values}
                  enableReinitialize={false}
                  validate={this.validate}
                  onSubmit={this.handleSubmit}
                  render={({
                    values,
                    handleSubmit,
                    isSubmitting,
                    handleReset
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      style={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                      {activePage}
                      <div
                        style={{
                          marginLeft: 'auto',
                          marginTop: '0.75rem',
                          marginBottom: '0.75rem',
                          padding: '0.75rem'
                        }}
                      >
                        {page > 0 && (
                          <Button
                            variant="contained"
                            type="button"
                            color="primary"
                            onClick={this.previous}
                          >
                            « Previous
                          </Button>
                        )}

                        {!isLastPage && (
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            Next Page{' '}
                            <Icon className={classes.rightIcon}>
                              arrow_forward
                            </Icon>
                          </Button>
                        )}
                        {isLastPage && (
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                          >
                            Submit
                          </Button>
                        )}
                      </div>
                    </form>
                  )}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Wizard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Wizard);
