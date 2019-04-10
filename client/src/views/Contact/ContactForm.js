import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import Button from 'components/CustomButtons/Button';

import Icon from '@material-ui/core/Icon';
import blue from '@material-ui/core/colors/blue';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
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
    width: '100%',
    margin: '1em auto',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    paddingTop: '0.75em',
    paddingBottom: '0.75em',

    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  formStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2em',

    [theme.breakpoints.up('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down(1200)]: {
      width: '96%',
      padding: '2em 1em'
    }
  },
  rightIcon: {
    marginLeft: theme.spacing.unit * 2
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
          const onReq = await axios.post('/api/contactformsubmit', {
            values,
            type: 'Contact Form'
          });
          if (onReq.data.status === 'success') {
            setSubmitting(false);
            resetForm();
            this.props.history.push('/');
          } else {
            console.log('error', onReq);
            setSubmitting(false);
            resetForm();
            this.props.history.push('/error');
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
            <div style={{ margin: '0.5em 0' }} />
            <Field
              name="email"
              component={TextField}
              type="email"
              label="Email"
              id="subject"
              fullWidth
              margin="normal"
            />
            <div style={{ margin: '0.5em 0' }} />
            <Field
              name="subject"
              component={TextField}
              type="text"
              label="Subject"
              id="subject"
              fullWidth
              margin="normal"
            />
            <div style={{ margin: '0.5em 0' }} />
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
            <div style={{ margin: '0.5em 0' }} />
            <div style={{ marginTop: '2.25em' }}>
              <Button
                variant="contained"
                disabled={isSubmitting}
                type="submit"
                color="primary"
                className={classes.button}
              >
                Send
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default withRouter(withStyles(styles)(ContactForm));
