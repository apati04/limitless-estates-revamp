import React from 'react';
import { withRouter } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';
import { RadioGroup, Checkbox, TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MaskedInput from 'react-text-mask';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import axios from 'axios';
import withStyles from '@material-ui/core/styles/withStyles';
import Wizard from './Wizard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
const required = value => (value ? undefined : 'Required');

const styles = theme => ({
  formControl: {
    width: '100%',
    textAlign: 'left',

    paddingTop: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 5
    }
  },
  customFormLabel: { color: 'rgba(0,0,0,0.54)' },
  error: { color: 'red' },
  radioStyle: {
    padding: '12px'
  },
  cardContent: {
    margin: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  },
  card: {
    padding: '3rem',
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'unset',
      padding: 0
    }
  },
  phoneNumber: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: '100%',
    padding: '0.1875rem 0rem 0.4375rem',
    fontFamily: '"Roboto"',
    fontSize: '1rem',
    color: 'rgba(0,0,0,0.87)',
    borderBottom: '1px solid rgba(0,0,0,0.42)'
  },
  inputColor: {
    borderBottomColor: 'rgba(0,0,0,0.87)'
  },
  inputError: {
    borderBottom: `2px solid ${theme.palette.error.main}`
  },
  errorMessage: {
    color: theme.palette.error.main,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    transform: 'scaleX(1)',
    margin: '0.25rem 0'
  },
  extraPadding: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing.unit * 8
    }
  },
  pageGrid: {
    [theme.breakpoints.down('xs')]: {
      padding: '0!important'
    }
  }
});

const regex = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];
const fLabel = {
  Q15:
    'Have you invested as a limited partner (LP) on a syndication deal in the past?',
  Q16: 'In a short paragraph please provide us with your investing experience.',
  Q17: 'What are your current investment objectives?'
};
const Questionnaire = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography align="center" variant="h5" component="h1">
        Investor Questionnaire
      </Typography>
      <Wizard
        initialValues={{
          Q1_fullname: '',
          Q2_email: '',
          Q3_phoneNumber: '',
          Q4_contactByTextMessage: '',
          Q4_contactByPhone: '',
          Q4_contactByEmail: '',
          Q5_WhyInterestedRealEstate: '',
          Q6_InvestInValueAddProjects: '',
          Q7_ReturnExpectations: '',
          Q8_TimeHorizonToInvest: '',
          Q9_LiquidityNeeds: '',
          Q10_MinimumDollarAmount: '',
          Q11_isAccredited: '',
          Q12_canVerifyFunds: '',
          Q13_riskToleranceLevel: '',
          Q14_BasedOutsideofUS: '',
          Q15_isLimitedPartner: '',
          Q16_InvestingExperience: '',
          Q17_InvestmentObjectives: '',
          Q18_ExtraInformation: '',
          netIncome: '',
          householdIncome: ''
        }}
        onSubmit={(values, actions) => {
          let formValues = values;
          if (values.Q14_BasedOutsideofUS === '') {
            formValues.Q14_BasedOutsideofUS = 'N/A';
          }
          axios
            .post('/api/investorformsubmit', {
              values: formValues,
              type: 'Investor Questionnaire'
            })
            .then(({ data }) => {
              if (data.status === 'success') {
                actions.setSubmitting(false);
                actions.resetForm();
                props.history.push('/thankyou');
              } else {
                throw Error('something happened');
              }
            })
            .catch(err => {
              props.history.push('/error');
            });
        }}
      >
        <Wizard.Page>
          <Grid
            container
            spacing={32}
            justify="center"
            alignItems="center"
            className={classes.pageGrid}
          >
            <Grid item xs={12} className={classes.pageGrid}>
              <Field
                fullWidth
                name="Q1_fullname"
                id="Q1_fullname"
                variant="standard"
                component={TextField}
                type="text"
                margin="dense"
                InputLabelProps={{
                  shrink: false
                }}
                validate={required}
                label="Your Name"
                className={classes.formControl}
              />

              <Field
                InputLabelProps={{
                  shrink: false
                }}
                fullWidth
                name="Q2_email"
                id="Q2_email"
                component={TextField}
                type="email"
                className={classes.formControl}
                label="Your Email"
                variant="standard"
                margin="dense"
                validate={required}
              />

              <div className={classes.formControl}>
                <Field
                  render={props => {
                    return (
                      <div>
                        <Typography
                          variant="subtitle1"
                          paragraph
                          align="left"
                          className={classNames(classes.customFormLabel)}
                          component="p"
                        >
                          Phone Number
                        </Typography>
                        <MaskedInput
                          mask={regex}
                          id="Q3_phoneNumber"
                          type="text"
                          placeholderChar={'_'}
                          placeholder="(###) ###-####"
                          onChange={event => {
                            const { value } = event.target;
                            props.form.setFieldValue(props.field.name, value);
                          }}
                          {...props}
                          className={classNames(classes.phoneNumber, {
                            [classes.inputError]:
                              props.form.touched['Q3_phoneNumber'] &&
                              props.form.errors['Q3_phoneNumber']
                          })}
                          name="Q3_phoneNumber"
                          required
                        />
                      </div>
                    );
                  }}
                  validate={required}
                  name="Q3_phoneNumber"
                />
                <ErrorMessage
                  name="Q3_phoneNumber"
                  component="p"
                  className={classes.errorMessage}
                />
              </div>

              <div className={classes.formControl}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  className={classes.customFormLabel}
                  component="p"
                >
                  How should we contact you?
                </Typography>
                <FormGroup
                  row
                  style={{
                    paddingLeft: '0.20rem',
                    paddingRight: '0.20rem'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Field
                        component={Checkbox}
                        name="Q4_contactByPhone"
                        color="primary"
                        id="Q4_contactByPhone"
                      />
                    }
                    margin="normal"
                    label="Phone"
                    variant="standard"
                  />
                  <FormControlLabel
                    control={
                      <Field
                        component={Checkbox}
                        name="Q4_contactByEmail"
                        color="primary"
                        id="Q4_contactByEmail"
                      />
                    }
                    margin="dense"
                    label="Email"
                  />
                  <FormControlLabel
                    control={
                      <Field
                        component={Checkbox}
                        name="Q4_contactByTextMessage"
                        color="primary"
                        id="Q4_contactByTextMessage"
                      />
                    }
                    margin="dense"
                    label="Text Message (SMS)"
                  />
                </FormGroup>
              </div>

              <Field
                className={classes.formControl}
                fullWidth
                InputLabelProps={{
                  shrink: false
                }}
                name="Q5_WhyInterestedRealEstate"
                id="Q5_WhyInterestedRealEstate"
                component={TextField}
                type="text"
                validate={required}
                multiline
                variant="standard"
                margin="normal"
                label="Why are you interested in investing in Real Estate?"
              />

              <Field
                fullWidth
                InputLabelProps={{
                  shrink: false
                }}
                name="Q7_ReturnExpectations"
                id="Q7_ReturnExpectations"
                component={TextField}
                className={classes.formControl}
                type="text"
                variant="standard"
                multiline
                label="What are your return expectations?"
                validate={required}
                margin="normal"
              />

              <Field
                component={TextField}
                fullWidth
                InputLabelProps={{
                  shrink: false
                }}
                validate={required}
                type="text"
                variant="standard"
                name="Q8_TimeHorizonToInvest"
                id="Q8_TimeHorizonToInvest"
                label="What time horizon (3-10 years) would be most desirable for a passive investment?"
                className={classes.formControl}
                margin="normal"
                multiline
              />
              <div className={classes.formControl}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  className={classes.customFormLabel}
                  component="p"
                >
                  Do you want to invest in multifamily, value-add projects?
                </Typography>

                <Field
                  component={RadioGroup}
                  validate={required}
                  name="Q6_InvestInValueAddProjects"
                  id="Q6_InvestInValueAddProjects"
                  row
                >
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                    labelPlacement="end"
                  />
                </Field>
                <div>
                  <ErrorMessage
                    name="Q6_InvestInValueAddProjects"
                    component="p"
                    className={classes.errorMessage}
                  />
                </div>
              </div>

              <div className={classes.formControl}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  className={classes.customFormLabel}
                  component="p"
                >
                  How would you rate your risk tolerance?
                </Typography>
                <Field
                  component={RadioGroup}
                  id="Q13_riskToleranceLevel"
                  name="Q13_riskToleranceLevel"
                  validate={required}
                  row
                >
                  <FormControlLabel
                    value="low"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio color="primary" />}
                    label="Medium"
                  />
                  <FormControlLabel
                    value="high"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                </Field>
                <ErrorMessage
                  name="Q13_riskToleranceLevel"
                  component="p"
                  className={classes.errorMessage}
                />
              </div>
            </Grid>
          </Grid>
        </Wizard.Page>
        <Wizard.Page>
          <Grid
            container
            spacing={32}
            alignItems="center"
            justify="center"
            className={classes.pageGrid}
          >
            <Grid item xs={12} className={classes.pageGrid}>
              <Field
                name="netIncome"
                id="netIncome"
                fullWidth
                InputLabelProps={{
                  shrink: false
                }}
                margin="normal"
                className={classes.formControl}
                component={TextField}
                type="text"
                label="What is your net worth excluding your primary residence?"
                validate={required}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      style={{ marginRight: '0.5rem' }}
                      postition="start"
                    >
                      ${' '}
                    </InputAdornment>
                  )
                }}
              />

              <Field
                name="Q9_LiquidityNeeds"
                id="Q9_LiquidityNeeds"
                fullWidth
                InputLabelProps={{
                  shrink: false
                }}
                margin="normal"
                className={classes.formControl}
                component={TextField}
                type="text"
                label="What liquidity needs do you have from the funds you may passively invest?"
                validate={required}
                multiline
              />
              <Field
                name="householdIncome"
                fullWidth
                id="householdIncome"
                component={TextField}
                type="text"
                label="What is your current annual household income?"
                InputLabelProps={{
                  shrink: false
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      style={{ marginRight: '0.5rem' }}
                      postition="start"
                    >
                      ${' '}
                    </InputAdornment>
                  )
                }}
                margin="normal"
                className={classes.formControl}
                validate={required}
              />
              <Field
                name="Q10_MinimumDollarAmount"
                fullWidth
                id="Q10_MinimumDollarAmount"
                component={TextField}
                type="text"
                label="What is the minimum dollar amount you are willing to invest?"
                InputLabelProps={{
                  shrink: false
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      style={{ marginRight: '0.5rem' }}
                      postition="start"
                    >
                      ${' '}
                    </InputAdornment>
                  )
                }}
                margin="normal"
                className={classes.formControl}
                validate={required}
              />

              <div className={classes.formControl}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  className={classes.customFormLabel}
                  component="p"
                >
                  Are you an accredited investor?
                </Typography>
                <FormHelperText>
                  {
                    'earned income that exceeded $200,000 (or $300,000 if married filing jointly) for the past 2 years and will do so in this current year OR have a net worth of $1M excluding your primary residence'
                  }
                </FormHelperText>
                <Field
                  component={RadioGroup}
                  id="Q11_isAccredited"
                  validate={required}
                  name="Q11_isAccredited"
                  row
                >
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                    labelPlacement="end"
                  />
                </Field>
                <ErrorMessage
                  name="Q11_isAccredited"
                  component="p"
                  className={classes.errorMessage}
                />
              </div>

              <div className={classes.formControl}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  className={classes.customFormLabel}
                  component="p"
                >
                  Can you show proof of funds?
                </Typography>
                <Field
                  component={RadioGroup}
                  id="Q12_canVerifyFunds"
                  name="Q12_canVerifyFunds"
                  validate={required}
                  row
                >
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                </Field>

                <ErrorMessage
                  name="Q12_canVerifyFunds"
                  component="p"
                  className={classes.errorMessage}
                />
              </div>
            </Grid>
          </Grid>
        </Wizard.Page>
        <Wizard.Page>
          <Grid
            container
            spacing={32}
            alignItems="center"
            justify="center"
            className={classes.pageGrid}
          >
            <Grid item xs={12} className={classes.pageGrid}>
              <Field
                name="Q14_BasedOutsideofUS"
                fullWidth
                id="Q14_BasedOutsideofUS"
                component={TextField}
                InputLabelProps={{
                  shrink: false
                }}
                type="text"
                margin="normal"
                label="If you are based outside of the U.S, have you invested in the US
                real estate market in the past?"
                helperText="Please skip to next question if not applicable"
                className={classNames(
                  classes.extraPadding,
                  classes.formControl
                )}
              />

              <Field
                name="Q15_isLimitedPartner"
                id="Q15_isLimitedPartner"
                fullWidth
                multiline
                component={TextField}
                type="text"
                label={fLabel.Q15}
                validate={required}
                InputLabelProps={{
                  shrink: false
                }}
                margin="normal"
                className={classNames(
                  classes.extraPadding,
                  classes.formControl
                )}
              />

              <Field
                name="Q16_InvestingExperience"
                id="Q16_InvestingExperience"
                fullWidth
                component={TextField}
                type="text"
                label={fLabel.Q16}
                validate={required}
                InputLabelProps={{
                  shrink: false
                }}
                multiline
                className={classNames(classes.formControl)}
              />

              <Field
                name="Q17_InvestmentObjectives"
                id="Q17_InvestmentObjectives"
                fullWidth
                component={TextField}
                type="text"
                label={fLabel.Q17}
                validate={required}
                InputLabelProps={{
                  shrink: false
                }}
                multiline
                margin="normal"
                className={classNames(classes.formControl)}
              />

              <Field
                name="Q18_ExtraInformation"
                id="Q18_ExtraInformation"
                fullWidth
                component={TextField}
                type="text"
                className={classNames(classes.formControl)}
                label="Is there anything else you would like to add?"
                multiline
                InputLabelProps={{
                  shrink: false
                }}
              />
            </Grid>
          </Grid>
        </Wizard.Page>
      </Wizard>
    </React.Fragment>
  );
};

export default withRouter(withStyles(styles)(Questionnaire));
