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
import SuccessNotify from './SuccessNotify';
import * as Yup from 'yup';
import axios from 'axios';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';

const styles = theme => ({
  ...productStyle,
  cardTitle,
  cardDiv: {
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem'
  }
});

class SubscribeSection extends Component {
  state = {
    success: false
  };
  resetState = () => {
    this.setState({ success: false });
  };
  render() {
    const { values, errors, touched, isSubmitting, classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="space-between">
          <GridItem xs={12} sm={12} md={6}>
            <img
              src="https://i.imgur.com/D4wijRG.jpg"
              className="img-fluid d-block"
              alt="img"
              style={{ width: '100%' }}
              title="guide"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Formik
              initialValues={{
                email: ''
              }}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                await axios.post('/api/mailchimp/subscribe', values);

                resetForm();
                setSubmitting(false);
                this.setState({ success: true });
                this.resetState();
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
                  className={classes.cardDiv}
                  noValidate
                  autoComplete="off"
                >
                  <Card>
                    <CardHeader color="success">
                      <h3 style={{ textAlign: 'center' }}>
                        Sign up to get your FREE <br /> Passive Investors Guide!
                      </h3>
                    </CardHeader>
                    <CardBody
                      style={{ paddingLeft: '30px', paddingRight: '30px' }}
                    >
                      <Field
                        component={TextField}
                        type="email"
                        label="Your Email Address"
                        name="email"
                        fullWidth
                        margin="normal"
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Get the Guide
                      </Button>
                    </CardBody>
                  </Card>
                </form>
              )}
            />
          </GridItem>
        </GridContainer>
        {this.state.success && <SuccessNotify />}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SubscribeSection));
