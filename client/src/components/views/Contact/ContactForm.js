import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import blue from '@material-ui/core/colors/blue';
import * as Yup from 'yup';
import Recaptcha from 'react-recaptcha';
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
    margin: '0 auto'
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
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
          recaptcha: '',
          firstname: '',
          lastname: '',
          company: '',
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
          // recaptcha: Yup.string().required(),
          firstname: Yup.string().required('Required'),
          lastname: Yup.string().required('Required'),
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
          <CardContent className={classes.cardContent}>
            <CardHeader
              title={
                <Typography variant="h2" gutterBottom>
                  Contact Us
                </Typography>
              }
              subheader={<Typography>We'd love you hear from you</Typography>}
            />
            <form onSubmit={handleSubmit}>
              <Grid
                container
                spacing={24}
                justify="center"
                alignItems="stretch"
              >
                <Grid item xs={12} sm={6}>
                  <Field
                    name="firstname"
                    component={TextField}
                    id="firstname"
                    type="text"
                    label="First Name"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="lastname"
                    component={TextField}
                    id="lastname"
                    type="text"
                    label="Last Name"
                    fullWidth
                    required
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="email"
                    component={TextField}
                    type="email"
                    label="Email Address"
                    fullWidth
                    id="company"
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="company"
                    component={TextField}
                    type="text"
                    label="Company Name"
                    fullWidth
                    id="company"
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="message"
                    component={TextField}
                    type="text"
                    multiline
                    variant="outlined"
                    rows={3}
                    label="Message to us"
                    fullWidth
                    id="message"
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Recaptcha
                    sitekey="6LcAD5UUAAAAAJ_fTPzRw2IDZhRZEKEcKdGyqd-r"
                    render="explicit"
                    theme="light"
                    verifyCallback={response => {
                      setFieldValue('recaptcha', response);
                    }}
                    onloadCallback={() => {
                      console.log('doneloading');
                    }}
                  />
                  {errors.recaptcha && touched.recaptcha && (
                    <p>{errors.recaptcha}</p>
                  )}
                </Grid>
              </Grid>

              <Button
                variant="contained"
                disabled={isSubmitting}
                type="submit"
                color="primary"
                className={classes.button}
              >
                Send
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </form>
          </CardContent>
        )}
      />
    );
  }
}

export default withStyles(styles)(withRouter(ContactForm));
