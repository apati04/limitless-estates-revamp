import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MultistepForm from '../Layouts/Forms/WizardForm/Multistep';
import BasicInformation from './FormPage/BasicInformation';
import Info from './FormPage/Info';
const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
    padding: '80px'
  }
});

const Questionnaire = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12}>
          <MultistepForm
            formTitle="Investor Questionnaire"
            formPages={[BasicInformation, Info]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Questionnaire.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Questionnaire);
