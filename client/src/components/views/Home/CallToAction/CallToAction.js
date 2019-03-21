import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LayoutBody from '../../Layouts/LayoutBody';
// import LayoutBody from '../../Layouts/LayoutBody';
import CTAForm from './CTAForm';
const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 10}px 0`,
    display: 'flex',
    flexGrow: 1,
  },
  image: {
    position: 'absolute',
    top: -40,
    left: -80,
    right: 0,
    bottom: 0,
    maxWidth: 660,
    width: 'auto%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  cardWrapper: {
    zIndex: 1,
  },
  appContainer: theme.container,
});
class CallToAction extends Component {
  state = {open: false};
  handleSubmit = event => {
    event.preventDefault ();
    this.setState ({open: true});
  };
  handleClose = () => {
    this.setState ({open: false});
  };
  render () {
    const {classes} = this.props;
    return (
      <LayoutBody component="section" width="large" className={classes.root}>
        <Grid container justify="flex-start" className={classes.appContainer}>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <CTAForm />
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown>
              <img
                src="/images/investors-pdf.jpg"
                className={classes.image}
                alt="investors-guide-cover"
              />
            </Hidden>
          </Grid>
        </Grid>
      </LayoutBody>
    );
  }
}

CallToAction.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles (styles) (CallToAction);