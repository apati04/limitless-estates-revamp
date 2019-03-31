import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { TextField, RadioGroup } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
const required = value => (value ? undefined : 'Required');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class Wizard extends React.Component {
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
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form onSubmit={handleSubmit}>
            {activePage}

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
            <div style={{ margin: '0 1rem' }}>
              {!isLastPage && (
                <Button variant="contained" color="primary" type="submit">
                  Next »
                </Button>
              )}
              {isLastPage && (
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              )}
            </div>
          </form>
        )}
      />
    );
  }
}

const Questionnaire = () => (
  <React.Fragment>
    <h1>Multistep / Form Wizard </h1>
    <Wizard
      initialValues={{
        fullname: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        isAccredited: null,
        canVerifyFunds: null,
        riskToleranceLevel: null,
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: '',
        Q6: ''
      }}
      onSubmit={(values, actions) => {
        sleep(300).then(() => {
          window.alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        });
      }}
    >
      <Wizard.Page>
        <Field
          name="Q5"
          fullWidth
          component={TextField}
          type="text"
          label="What liquidity needs do you have from the funds you may passively invest?"
          validate={required}
          variant="filled"
        />

        <Field
          name="Q6"
          fullWidth
          component={TextField}
          type="text"
          variant="filled"
          label="What is the minimum dollar amount you are willing to invest?"
          validate={required}
        />
        <div>
          <FormLabel component="legend">
            Are you an accredited investor?
          </FormLabel>
          <FormHelperText>
            (earned income that exceeded $200,000 (or $300,000 if married filing
            jointly) for the past 2 years and will do so in this current year OR
            have a net worth of $1M excluding your primary residence)
          </FormHelperText>

          <Field
            component={RadioGroup}
            id="isAccredited"
            validate={required}
            name="isAccredited"
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="end"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="end"
            />
          </Field>
          <div>
            <ErrorMessage
              name="isAccredited"
              component="div"
              className="field-error"
            />
          </div>
        </div>
        <div>
          <FormLabel component="legend">Can you show proof of funds</FormLabel>
          <Field
            component={RadioGroup}
            id="canVerifyFunds"
            name="canVerifyFunds"
            validate={required}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="end"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="end"
            />
          </Field>
          <div>
            <ErrorMessage
              name="canVerifyFunds"
              component="div"
              className="field-error"
            />
          </div>
        </div>
        <div>
          <FormLabel component="legend">
            How would you rate your risk tolerance?
          </FormLabel>
          <Field
            component={RadioGroup}
            id="riskToleranceLevel"
            name="riskToleranceLevel"
            validate={required}
          >
            <FormControlLabel
              value="low"
              control={<Radio color="primary" />}
              label="Low"
              labelPlacement="end"
            />
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" />}
              label="Medium"
              labelPlacement="end"
            />
            <FormControlLabel
              value="high"
              control={<Radio color="primary" />}
              label="High"
              labelPlacement="end"
            />
          </Field>
          <div>
            <ErrorMessage
              name="riskToleranceLevel"
              component="div"
              className="field-error"
            />
          </div>
        </div>
      </Wizard.Page>
      <Wizard.Page>
        <Field
          fullWidth
          name="fullname"
          component={TextField}
          type="text"
          label="Name"
          validate={required}
        />

        <Field
          fullWidth
          name="email"
          component={TextField}
          type="email"
          label="Email"
          validate={required}
        />
      </Wizard.Page>
      <Wizard.Page>
        <Field
          fullWidth
          name="Q1"
          component={TextField}
          type="text"
          label="Why are you interested in investing in Real Estate?"
          validate={required}
        />

        <Field
          fullWidth
          name="Q2"
          component={TextField}
          type="text"
          label="Do you want to invest in multifamily, value-add projects?"
          validate={required}
        />

        <Field
          fullWidth
          name="Q3"
          component={TextField}
          type="text"
          label="What are your return expectations?"
          validate={required}
        />

        <Field
          name="Q4"
          fullWidth
          component={TextField}
          type="text"
          label="What time horizon (3-10 years) would be most desirable for a passive investment?"
          validate={required}
        />
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

export default Questionnaire;
