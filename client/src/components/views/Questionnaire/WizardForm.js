import React, { Component } from 'react';
import { Switch, Route, Prompt, Redirect, matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import BasicPage from './FormPage/BasicInformation';
import LocationPage from './FormPage/Location';
import SubmitPage from './FormPage/submit';
import withStyles from '@material-ui/core/styles/withStyles';
const styles = theme => ({
  root: {
    flex: 1
  }
});

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicPage />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

class WizardForm extends Component {
  state = {
    submitted: false
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };
  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };
  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };
  handleSubmit = values => {
    console.log('values', values);
    this.setState(
      {
        submitted: true
      },
      () => this.props.history.push('/')
    );
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh'
        }}
      >
        <Prompt
          when={!this.state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: '/form' })
              ? true
              : 'Are you sure you want to navigate away?';
          }}
        />
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            tos: false
          }}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            console.log('values: ', values);
            resetForm();
            setSubmitting(false);
            // const onReq = await axios.post('/dev/contactreq', {
            //   token: values.recaptcha
            // });
            // if (onReq.data.response.success) {
            //   return this.props.history.push('/info/contact');
            // }
            // return this.props.history.push('/error/');
            /**
              const payload = await axios.post('/api/mailchimp/contactus', values);
                        resetForm();
                          setSubmitting(false);
           */
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string()
              .email('Email is not valid')
              .required('Required'),
            message: Yup.string().required('Required')
          })}
        >
          <Form>
            <Switch>
              <Redirect from="/form" exact to="/form/basic" />
              <Route path="/form/basic" component={BasicPage} />
              <Route path="/form/location" component={LocationPage} />
              <Route path="/form/submit" component={SubmitPage} />
            </Switch>
            <Button />
          </Form>
        </Formik>
      </div>
    );
  }
}

WizardForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(WizardForm);
