import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');

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
      <React.Fragment>
        <div style={{ height: '300px', background: '#e7e7e7' }} />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Formik
              initialValues={values}
              enableReinitialize={false}
              validate={this.validate}
              onSubmit={this.handleSubmit}
              render={({ values, handleSubmit, isSubmitting, handleReset }) => (
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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

                  {!isLastPage && (
                    <Button
                      variant="contained"
                      type="button"
                      color="primary"
                      type="submit"
                    >
                      Next »
                    </Button>
                  )}
                  {isLastPage && (
                    <Button type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  )}
                </form>
              )}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const Questionnaire = () => (
  <React.Fragment>
    <div style={{ margin: '0 auto' }}>
      <h1>Multistep / Form Wizard </h1>
      <Wizard
        initialValues={{
          fullname: '',
          lastName: '',
          email: '',
          phoneNumber: '',
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
          <Grid container justify="space-between">
            <Grid item xs={12}>
              <Field
                fullWidth
                name="fullname"
                component={TextField}
                type="text"
                label="Name"
                validate={required}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                name="email"
                component={TextField}
                type="email"
                label="Email"
                validate={required}
              />
            </Grid>
          </Grid>
        </Wizard.Page>
        <Wizard.Page>
          <div className="main-content">
            <Card raised>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="Q1"
                  component={TextField}
                  type="text"
                  label="Why are you interested in investing in Real Estate?"
                  validate={required}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="Q2"
                  component={TextField}
                  type="text"
                  label="Do you want to invest in multifamily, value-add projects?"
                  validate={required}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="Q3"
                  component={TextField}
                  type="text"
                  label="What are your return expectations?"
                  validate={required}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="Q4"
                  fullWidth
                  component={TextField}
                  type="text"
                  label="What time horizon (3-10 years) would be most desirable for a passive investment?"
                  validate={required}
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="Q5"
                  fullWidth
                  component={TextField}
                  type="text"
                  label="What liquidity needs do you have from the funds you may passively invest?"
                  validate={required}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="Q6"
                  fullWidth
                  component={TextField}
                  type="text"
                  label="What is the minimum dollar amount you are willing to invest?"
                  validate={required}
                />
              </Grid>
            </Card>
          </div>
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
    </div>
  </React.Fragment>
);

export default Questionnaire;
