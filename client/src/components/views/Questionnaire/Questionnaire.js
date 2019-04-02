import React from 'react';
import { Field } from 'formik';
import { RadioGroup, Checkbox, TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import withStyles from '@material-ui/core/styles/withStyles';
import Wizard from './Wizard';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';
const required = value => (value ? undefined : 'Required');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const styles = theme => ({
  formControl: {},
  customFormLabel: { color: 'rgba(0,0,0,0.54)' },
  error: { color: 'red' },
  radioStyle: {
    padding: '12px'
  },
  root: {
    backgroundColor: 'rgba(0,0,0,0.06)'
  }
});

const fLabel = {
  Q15:
    'Have you invested as a limited partner (LP) on a syndication deal in the past?',
  Q16: 'In a short paragraph please provide us with your investing experience.',
  Q17: 'What are your investment objectives?'
};
const Questionnaire = props => {
  const { classes } = props;
  console.log('requires: ', props);
  return (
    <React.Fragment>
      <h1>Multistep / Form Wizard </h1>
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
          Q18_ExtraInformation: ''
        }}
        onSubmit={(values, actions) => {
          sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          });
        }}
      >
        <Wizard.Page>
          <Grid container justify="center" alignItems="center" spacing={24}>
            <Grid item xs={12}>
              <Field
                fullWidth
                name="Q1_fullname"
                id="Q1_fullname"
                variant="filled"
                component={TextField}
                type="text"
                margin="dense"
                validate={required}
                label="Your Name"
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                name="Q2_email"
                id="Q2_email"
                component={TextField}
                type="email"
                className={classes.formControl}
                label="Your Email"
                variant="filled"
                margin="dense"
                validate={required}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                variant="filled"
                name="Q3_phoneNumber"
                id="Q3_phoneNumber"
                component={TextField}
                className={classNames(classes.formControl, classes.phoneNumber)}
                type="text"
                margin="dense"
                label="Phone Number"
                validate={required}
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.formControl}>
                <Typography
                  variant="body1"
                  className={classes.customFormLabel}
                  component="legend"
                >
                  How should we contact you?
                </Typography>

                <FormGroup
                  row
                  style={{ paddingLeft: '0.20rem', paddingRight: '0.20rem' }}
                  className={classes.formControl}
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
                    margin="dense"
                    label="Phone"
                    variant="filled"
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
            </Grid>

            <Grid item xs={12}>
              <Field
                className={classes.formControl}
                fullWidth
                name="Q5_WhyInterestedRealEstate"
                id="Q5_WhyInterestedRealEstate"
                component={TextField}
                type="text"
                validate={required}
                multiline
                variant="filled"
                label="Why are you interested in investing in Real Estate?"
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                name="Q7_ReturnExpectations"
                id="Q7_ReturnExpectations"
                component={TextField}
                className={classes.formControl}
                type="text"
                variant="filled"
                label="What are your return expectations?"
                validate={required}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                fullWidth
                validate={required}
                type="text"
                variant="filled"
                name="Q8_TimeHorizonToInvest"
                id="Q8_TimeHorizonToInvest"
                label="What time horizon (3-10 years) would be most desirable for a
                passive investment?"
                className={classes.formControl}
              />
            </Grid>
          </Grid>
        </Wizard.Page>
        <Wizard.Page>
          <Grid
            container
            spacing={32}
            alignItems="flex-start"
            justify="space-between"
          >
            <Grid item xs={12}>
              <Field
                name="Q9_LiquidityNeeds"
                id="Q9_LiquidityNeeds"
                fullWidth
                component={TextField}
                type="text"
                variant="outlined"
                label="What liquidity needs do you have from the funds you may passively invest?"
                validate={required}
                required
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="Q10_MinimumDollarAmount"
                fullWidth
                id="Q10_MinimumDollarAmount"
                component={TextField}
                type="text"
                label="What is the minimum dollar amount you are willing to invest?"
                validate={required}
              />
            </Grid>
            <Grid item xs={12}>
              <div>
                <FormLabel className={classNames(classes.formControl)}>
                  Do you want to invest in multifamily, value-add projects?
                </FormLabel>

                <Field
                  component={RadioGroup}
                  margin="dense"
                  className={classNames(
                    classes.radioStyle,
                    classes.formControl
                  )}
                  validate={required}
                  variant="filled"
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
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">
                Are you an accredited investor?
              </FormLabel>
              <FormHelperText>
                (earned income that exceeded $200,000 (or $300,000 if married
                filing jointly) for the past 2 years and will do so in this
                current year OR have a net worth of $1M excluding your primary
                residence)
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
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">
                Can you show proof of funds
              </FormLabel>
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
            </Grid>
            <Grid item xs={12}>
              <div>
                <FormLabel component="legend">
                  How would you rate your risk tolerance?
                </FormLabel>
                <Field
                  component={RadioGroup}
                  id="Q13_riskToleranceLevel"
                  name="Q13_riskToleranceLevel"
                  validate={required}
                  row
                >
                  <FormControlLabel
                    value="high"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio color="primary" />}
                    label="Medium"
                  />

                  <FormControlLabel
                    value="low"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                </Field>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Field
                name="Q14_BasedOutsideofUS"
                fullWidth
                id="Q14_BasedOutsideofUS"
                component={TextField}
                type="text"
                label="If you are based outside of the United States, have you invested in the US real estate market in the past?"
                helperText="Please skip to next question if not applicable"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="Q15_isLimitedPartner"
                id="Q15_isLimitedPartner"
                fullWidth
                component={TextField}
                type="text"
                label={fLabel.Q15}
                validate={required}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="Q16_InvestingExperience"
                id="Q16_InvestingExperience"
                fullWidth
                component={TextField}
                type="text"
                label={fLabel.Q16}
                validate={required}
                className={classes.formControl}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="Q17_InvestmentObjectives"
                id="Q17_InvestmentObjectives"
                fullWidth
                component={TextField}
                type="text"
                label={fLabel.Q17}
                validate={required}
                className={classes.formControl}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="Q18_ExtraInformation"
                id="Q18_ExtraInformation"
                fullWidth
                component={TextField}
                type="text"
                className={classes.formControl}
                variant="filled"
                label="Anything else"
                validate={required}
              />
            </Grid>
          </Grid>
        </Wizard.Page>
        {/* <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              }
              if (!values.favoriteColor) {
                errors.favoriteColor = 'Required';
              }
              return errors;
            }}
          >
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="field-error"
              />
            </div>
            <div>
              <label>Favorite Color</label>
              <Field name="favoriteColor" component="select">
                <option value="">Select a Color</option>
                <option value="#ff0000">❤️ Red</option>
                <option value="#00ff00">💚 Green</option>
                <option value="#0000ff">💙 Blue</option>
              </Field>
              <ErrorMessage
                name="favoriteColor"
                component="div"
                className="field-error"
              />
            </div>
          </Wizard.Page> */}
      </Wizard>
    </React.Fragment>
  );
};

export default withStyles(styles)(Questionnaire);
