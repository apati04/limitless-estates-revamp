import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import * as Yup from 'yup';
import Recaptcha from 'react-recaptcha';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});
class ContactForm extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Formik
        initialValues={{
          recaptcha: '',
          firstname: '',
          lastname: '',
          email: '',
          message: ''
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
        // validationSchema={Yup.object().shape({
        //   recaptcha: Yup.string().required(),
        //   firstname: Yup.string().required('Required'),
        //   lastname: Yup.string().required('Required'),
        //   email: Yup.string()
        //     .email('Email is not valid')
        //     .required('Required'),
        //   message: Yup.string().required('Required')
        // })}
        render={({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          isSubmitting
        }) => (
          <Grid container justify="center" alignItems="center">
            <Grid item md={6}>
              <Card className="my-5">
                <CardHeader
                  style={{
                    width: '94%',
                    alignSelf: 'center',
                    marginTop: '-1.5em'
                  }}
                  title="Contact Us"
                />

                <CardContent>
                  <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container>
                      <Grid item md={6}>
                        <label
                          style={{ opacity: '0.88' }}
                          htmlFor="firstname"
                          className="col-form-label"
                        >
                          First Name
                        </label>
                        <Field
                          name="firstname"
                          component={TextField}
                          type="text"
                          id="firstname"
                          variant="outlined"
                          label="First Name"
                        />
                        {touched.firstname && errors.firstname && (
                          <small className="p-0 m-0 font-italic text-danger">
                            {errors.firstname}
                          </small>
                        )}
                      </Grid>
                      <Grid item md={6}>
                        <label
                          style={{ opacity: '0.88' }}
                          htmlFor="lastname"
                          className="col-form-label"
                        >
                          Last Name
                        </label>
                        <Field
                          name="lastname"
                          component="input"
                          className="form-control"
                          type="text"
                          id="lastname"
                        />
                        {touched.lastname && errors.lastname && (
                          <small className=" p-0 m-0 font-italic text-danger">
                            {errors.lastname}
                          </small>
                        )}
                      </Grid>
                    </Grid>
                    <label
                      style={{ opacity: '0.88' }}
                      htmlFor="email"
                      className="col-form-label"
                    >
                      Email
                    </label>
                    <Field
                      component="input"
                      className="form-control"
                      type="email"
                      name="email"
                    />
                    <label
                      style={{ opacity: '0.88' }}
                      htmlFor="message"
                      className="col-form-label"
                    >
                      Message
                    </label>
                    <Field
                      style={{ height: '8rem' }}
                      className="md-textarea form-control pt-1"
                      component="textarea"
                      type="text"
                      name="message"
                      id="message"
                    />
                    {touched.message && errors.message && (
                      <small className=" p-0 m-0 font-italic text-danger">
                        {errors.message}
                      </small>
                    )}
                    <Grid container>
                      <Grid item xs={12}>
                        <div className="md-form">
                          {touched.email && errors.email && (
                            <small className=" p-0 m-0 font-italic text-danger">
                              {errors.email}
                            </small>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                    <div className="row">
                      <div className="col-12">
                        <div className="md-form" />
                      </div>
                    </div>
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
                    <button
                      className="btn btn-primary btn-block"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      />
    );
  }
}

export default withStyles(styles)(withRouter(ContactForm));
