import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import blue from '@material-ui/core/colors/blue';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    backgroundColor: blue['A400'],
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex'
  },
  formStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2em',
    [theme.breakpoints.up('md')]: {
      width: '75%'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});
class ContactForm extends Component {
  verifyCallback = recaptchaToken => {
    console.log('recaptcha token ', recaptchaToken);
  };
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
        validateOnChange={false}
        validateOnBlur={false}
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
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={classes.formStyle}>
            <CardHeader
              title={
                <Typography align="center" variant="h2" gutterBottom>
                  Contact Us
                </Typography>
              }
              subheader={
                <Typography align="center">
                  We'd love you hear from you
                </Typography>
              }
            />

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
            <div style={{ marginTop: '2.25em' }}>
              <Button
                variant="contained"
                disabled={isSubmitting}
                type="submit"
                color="primary"
                className={classes.button}
              >
                <div>Send</div>
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default withStyles(styles)(withRouter(ContactForm));
