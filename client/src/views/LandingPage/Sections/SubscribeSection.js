import React, { Component } from 'react';

import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import { cardTitle } from 'assets/jss/material-kit-react.jsx';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';

import * as Yup from 'yup';
import axios from 'axios';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';

import { withSnackbar } from 'notistack';

const styles = theme => ({
  ...productStyle,
  cardTitle,
  cardDiv: {
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem'
  },
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SubscribeSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ borderRadius: '6px' }} className={classes.section}>
        <GridContainer justify="space-between">
          <GridItem xs={12} sm={12} md={6}>
            <img
              src="https://i.imgur.com/D4wijRG.jpg"
              className="img-fluid d-block"
              alt="img"
              style={{ width: '100%', marginLeft: '15px' }}
              title="guide"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Formik
              initialValues={{
                email: ''
              }}
              onSubmit={(values, { resetForm, setSubmitting, setErrors }) => {
                axios
                  .post('/api/mailchimp/subscribe', values)
                  .then(() => {
                    this.props.enqueueSnackbar('Thank you for Signing up!', {
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                      },
                      variant: 'success',
                      persist: false
                    });
                    resetForm();
                    setSubmitting(false);
                  })
                  .catch(error => {
                    resetForm();
                    setSubmitting(false);
                    setErrors(error);
                    this.props.enqueueSnackbar('Something went wrong.', {
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                      },
                      variant: 'error',
                      persist: false
                    });
                  });
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
                isSubmitting,
                isValid
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className={classes.cardDiv}
                  noValidate
                  autoComplete="off"
                >
                  <Card>
                    <CardHeader style={{ backgroundColor: '#59698d' }}>
                      <h3
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          marginTop: 0.875 + 'rem'
                        }}
                        className={classes.title}
                      >
                        Sign up to get your FREE <br /> Passive Investors Guide!
                      </h3>
                    </CardHeader>
                    <CardBody
                      style={{ paddingLeft: '56px', paddingRight: '56px' }}
                    >
                      <Field
                        component={TextField}
                        type="email"
                        label="Your Email Address"
                        name="email"
                        fullWidth
                        margin="normal"
                      />
                      <div
                        style={{
                          marginTop: '0.5rem'
                        }}
                      >
                        <Button
                          fullWidth
                          color="success"
                          type="submit"
                          disabled={!isValid || isSubmitting}
                        >
                          Get the Guide
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </form>
              )}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(withSnackbar(SubscribeSection)));
