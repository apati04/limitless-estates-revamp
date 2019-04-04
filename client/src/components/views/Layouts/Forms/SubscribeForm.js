import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import Button from '../Button';
import * as Yup from 'yup';
import './style.css';
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
  },
  button: {
    width: '100%',
    backgroundColor: 'rgba(40,40,42,1)',
    color: theme.palette.common.white
  }
});
class SubscribeForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Formik
        initialValues={{
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
              component={TextField}
              className={classes.textField}
              type="email"
              label="Your Email Address"
              name="email"
              variant="outlined"
              id="nife"
            />

            <Button
              variant="contained"
              color="inherit"
              type="submit"
              disabled={isSubmitting}
              className={classes.button}
            >
              {this.props.buttonText}
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
  subHeader: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};
export default withRouter(withStyles(styles)(SubscribeForm));
