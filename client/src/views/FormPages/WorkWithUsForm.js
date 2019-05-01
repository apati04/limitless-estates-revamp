import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import { Formik, Field } from 'formik';
import axios from 'axios';
import { TextField } from 'formik-material-ui';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Button from 'components/CustomButtons/Button';
import * as Yup from 'yup';
import workStyle from 'assets/jss/material-kit-react/views/landingPageSections/workStyle';
import { withSnackbar } from 'notistack';
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Please enter your name'),
  email: Yup.string().required('Please enter your email address'),
  message: Yup.string().required('A message is required')
});
class WorkWithUsForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Formik
          initialValues={{
            fullname: '',
            email: '',
            message: ''
          }}
          onSubmit={(values, bag) => {
            axios.post('/api/formsectionpost', { values, type: 'WorkWithUs' });
            bag.resetForm();
            this.props.enqueueSnackbar('Thank you', {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
              },
              variant: 'success',
              perisist: false
            });
          }}
          validationSchema={validationSchema}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            isSubmitting
          }) => (
            <GridContainer justify="center">
              <GridItem cs={12} sm={12} md={8}>
                <h2 className={classes.title}>Work with us</h2>
                <h4 className={classes.description}>
                  Feel free to contact us, we are always open to discussing new
                  opportunities. We will get back to you as soon as possible.
                </h4>
                <form onSubmit={handleSubmit}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <Field
                        name="fullname"
                        id="fullname"
                        component={TextField}
                        label="Your Name"
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Field
                        name="email"
                        component={TextField}
                        label="Your Email"
                        id="email"
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <Field
                        type="text"
                        name="message"
                        component={TextField}
                        label="Your Message"
                        id="message"
                        fullWidth
                        multiline
                        rows={5}
                        margin="normal"
                      />
                    </GridItem>

                    <GridContainer justify="center">
                      <GridItem
                        xs={12}
                        sm={12}
                        md={4}
                        className={classes.textCenter}
                      >
                        <Button
                          type="submit"
                          disabled={!isValid || isSubmitting}
                          color="primary"
                        >
                          Send Message
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </GridContainer>
                </form>
              </GridItem>
            </GridContainer>
          )}
        />
      </div>
    );
  }
}

export default withStyles(workStyle)(withSnackbar(WorkWithUsForm));
