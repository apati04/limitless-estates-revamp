import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import Typography from '../../Layouts/Typography';
import { withRouter } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  }
});
class SubscribeForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Formik
        initialValues={{
          recaptcha: '',
          email: ''
        }}
        onSubmit={async values => {
          console.log('values: ', values);
          // const onReq = await axios.post('/dev/contactreq', {
          //   token: values.recaptcha
          // });
          // if (onReq.data.response.success) {
          //   return this.props.history.push('/info/contact');
          // }
          // return this.props.history.push('/error/');
        }}
        validationSchema={Yup.object().shape({
          //   recaptcha: Yup.string().required(),
          email: Yup.string()
            .email('Email is not valid')
            .required('Required')
        })}
        render={({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          isSubmitting
        }) => (
          <form
            onSubmit={handleSubmit}
            className={this.props.formStyle}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h2" component="h2" gutterBottom>
              {this.props.title}
            </Typography>
            <Typography variant="h5">{this.props.subHeader}</Typography>
            <Field
              required
              component={TextField}
              className={classes.textField}
              type="email"
              label="Your Email Address"
              name="email"
              variant="outlined"
            />

            <div className=" py-3">
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
            </div>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      />
    );
  }
}

SubscribeForm.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired
};
export default withStyles(styles)(withRouter(SubscribeForm));
