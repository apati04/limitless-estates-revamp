import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import blue from '@material-ui/core/colors/blue';
import * as Yup from 'yup';
import Recaptcha from 'react-recaptcha';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
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
    flexDirection: 'column',
    width: '50%'
  },
  cardContent: {
    flexGrow: 1
  }
});
class ContactForm extends Component {
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
        validateOnBlur={false}
        validateOnChange={false}
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
          email: Yup.string().email('Email is not valid').required('Required'),
          message: Yup.string().required('Required')
        })}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
          <Card className={classes.cardStyle}>
            <CardContent className={classes.cardContent}>
              <CardHeader title='Contact Us' />
              <form onSubmit={handleSubmit} noValidate autoComplete='off' className={classes.content}>
                <Field name='firstname' component={TextField} type='text' placeholder='First name' id='firstname' />
                {/* {errors.firstname && <small className='p-0 m-0 font-italic text-danger'>{errors.firstname}</small>} */}
                <Field
                  name='lastname'
                  component={TextField}
                  className='form-control'
                  type='text'
                  placeholder='Last name'
                  id='lastname'
                />
                <Field
                  component={TextField}
                  className='form-control my-0'
                  type='email'
                  name='email'
                  placeholder='Email Address'
                />
                <Field
                  className='md-textarea form-control pt-1'
                  component={TextField}
                  type='text'
                  name='message'
                  multiline
                  id='message'
                  placeholder='Your Message To us'
                />

                <div className=' py-3'>
                  <Recaptcha
                    sitekey='6LcAD5UUAAAAAJ_fTPzRw2IDZhRZEKEcKdGyqd-r'
                    render='explicit'
                    theme='light'
                    verifyCallback={(response) => {
                      setFieldValue('recaptcha', response);
                    }}
                    onloadCallback={() => {
                      console.log('doneloading');
                    }}
                  />
                  {errors.recaptcha && touched.recaptcha && <p>{errors.recaptcha}</p>}
                </div>

                <Button
                  variant='contained'
                  disabled={isSubmitting}
                  type='submit'
                  color='primary'
                  className={classes.button}
                >
                  Send
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <Icon className={classes.rightIcon}>send</Icon>
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      />
    );
  }
}

export default withStyles(styles)(withRouter(ContactForm));
