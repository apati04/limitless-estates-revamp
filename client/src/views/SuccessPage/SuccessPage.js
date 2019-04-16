import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/CustomButtons/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle';
const styles = theme => ({
  ...basicsStyle
});
const SuccessPage = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer
          style={{ height: '80vh' }}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <GridItem xs={12} style={{ textAlign: 'center' }}>
            <h1>Thank you for your submission!</h1>
            <h3>
              {' '}
              One of the memembers will get back to you as soon as possible!
            </h3>
          </GridItem>
          <GridItem xs={12} style={{ textAlign: 'center' }}>
            <CheckCircleIcon style={{ color: 'green', fontSize: '80px' }} />
          </GridItem>
          <GridItem xs={12} style={{ textAlign: 'center' }}>
            <Button
              simple
              component={props => <Link {...props} to="/" />}
              color="primary"
            >
              Back To The Homepage
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(styles)(SuccessPage);
