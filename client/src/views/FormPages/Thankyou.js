import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import withTheme from '@material-ui/core/styles/withTheme';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Card';
import { TextField } from 'formik-material-ui';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Button from 'components/CustomButtons/Button.js';
const styles = theme => ({
  appContainer: {
    ...theme.container
  },
  newsLetter: {
    margin: '1.25rem 0',
    backgroundColor: lightBlue[200],
    padding: '2rem',
    borderRadius: 0
  },
  root: {
    flexGrow: 1,
    ...theme.gradient,
    backgroundSize: 'cover',
    padding: `${theme.spacing.unit * 10}px 0 ${theme.spacing.unit * 40}px 0`
  },
  header: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      lineHeight: '1.1'
    }
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  gridContainer: {
    ...theme.CustomGridContainer,
    [theme.breakpoints.up('md')]: {
      padding: '4rem'
    },
    padding: 0
  },
  imageStyles: {
    width: '100%'
  },
  filler: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  textField: {
    width: '100%'
  },
  cssBorder: {
    backgroundColor: 'white',
    borderRadius: 0
  },
  button: {
    borderRadius: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: '0.5rem'
    },
    marginTop: '0.25rem',
    backgroundColor: 'rgba(40,40,42,1)',
    padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 3}px`
  },
  mobile: {
    color: 'red'
  }
});

class Thankyou extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const { classes, theme } = this.props;

    console.log(theme.breakpoints.up('sm'));
    return (
      <div className={classes.root}>
        <div className={classNames(classes.appContainer, 'main-content')}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            <Grid item xs={12} md={8}>
              <Typography
                gutterBottom
                variant="h5"
                className={classNames(classes.header, {
                  [classes.mobile]: this.state.width < 960
                })}
              >
                Thank You!
              </Typography>

              <Typography paragraph variant="body1" component="p">
                One of our members will get get back to you soon! In the
                meantime...
              </Typography>
              <div style={{ margin: '2rem 0' }} />
              <Typography
                variant="h5"
                className={classNames(classes.header)}
                gutterBottom
                component="h1"
              >
                Stay updated in multifamily news, every month
              </Typography>
              <Typography paragraph component="p">
                Every month we send out something advice from blah blah blah.
                Don't know where to start in multifamily real estate investing?
                Do you have 5 minutes every week to improve your skill? Subcribe
                below. Or connect with us on Facebook, LinkedIn, Google+
              </Typography>
              <div style={{ margin: '2rem 0' }} />
              <Grid item xs={12}>
                <Paper elevation={2} className={classNames(classes.newsLetter)}>
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
                        <Grid
                          container
                          justify="center"
                          alignItems="flex-start"
                        >
                          <Grid item xs={12}>
                            <Typography paragraph variant="subtitle1">
                              <strong>
                                Sign-Up For The Limitless Estates Monthly
                                Newsletter
                              </strong>
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={8}>
                            <Field
                              component={TextField}
                              className={classes.textField}
                              type="email"
                              InputProps={{
                                classes: { notchedOutline: classes.cssBorder }
                              }}
                              placeholder="Your Email Address"
                              name="email"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              disabled={isSubmitting}
                              className={classes.button}
                            >
                              Sign Up
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    )}
                  />
                </Paper>
              </Grid>
              <div style={{ margin: '4rem 0' }} />
              <Grid item xs={12}>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    component={props => <Link {...props} to="/" />}
                    variant="text"
                    color="primary"
                    style={{
                      textDecoration: 'underline',
                      textUnderlinePosition: 'under'
                    }}
                  >
                    Back To Home
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Thankyou.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withTheme()(withStyles(styles)(Thankyou));
