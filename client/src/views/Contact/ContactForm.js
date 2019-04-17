import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import CardHeader from 'components/Card/CardHeader';
import Button from 'components/CustomButtons/Button.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';
import * as Yup from 'yup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
const styles = theme => ({
  ...loginPageStyle,
  cardDiv: {
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem'
  }
});
class ContactForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Formik
        initialValues={{
          fullname: '',
          subject: '',
          email: '',
          message: ''
        }}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          const onReq = await axios.post('/api/contactformsubmit', {
            values,
            type: 'Contact Form'
          });
          if (onReq.data.status === 'success') {
            setSubmitting(false);
            this.props.history.push('/thankyou');
            resetForm();
          } else {
            setSubmitting(false);
            resetForm();
            this.props.enqueueSnackbar('Something went wrong.', {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
              },
              variant: 'error',
              persist: false
            });
          }
          // if (onReq.data.response.success) {
          //   return this.props.history.push('/info/contact');
          // }
          // return this.props.history.push('/error/');
          /**
              const payload = await axios.post('/api/mailchimp/contactus', values);
                        resetForm();
                          setSubmitting(false);
           */
          if (values) {
          }

          // this.props.enqueueSnackbar('Thank you for Signing up!', {
          //   anchorOrigin: {
          //     vertical: 'bottom',
          //     horizontal: 'right'
          //   },
          //   variant: 'success',
          //   persist: false
          // });
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string().required('Required'),
          subject: Yup.string().required('Required'),
          email: Yup.string()
            .email('Email is not valid')
            .required('Required'),
          message: Yup.string().required('Required')
        })}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          isValid
        }) => (
          <div className={classes.cardDiv}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h3>Send us a Message</h3>
              </CardHeader>
              <p
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                className={classes.divider}
              >
                A member from the limitless team will get back to you as soon as
                possible
              </p>
              <CardBody>
                <Field
                  name="fullname"
                  component={TextField}
                  id="fullname"
                  type="text"
                  label="Name"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="email"
                  component={TextField}
                  type="email"
                  label="Email"
                  id="subject"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="subject"
                  component={TextField}
                  type="text"
                  label="Subject"
                  id="subject"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="message"
                  component={TextField}
                  type="text"
                  multiline
                  rows={3}
                  label="Message"
                  id="message"
                  fullWidth
                  margin="normal"
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  color="primary"
                >
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </div>
        )}
      />
    );
  }
}

export default withRouter(withStyles(styles)(withSnackbar(ContactForm)));
