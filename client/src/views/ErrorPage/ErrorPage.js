import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/CustomButtons/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle';
const styles = theme => ({
  ...basicsStyle
});
const ErrorPage = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" direction="column">
          <GridItem xs={12} style={{ textAlign: 'center' }}>
            <img
              src="https://i.imgur.com/lC9O8RI.png"
              alt="404"
              style={{
                width: '100%',
                maxWidth: '500px'
              }}
            />
            <h1 className="display-1 text-danger">404</h1>
            <h3>
              The page you are looking for doesn't exist or an other error
              occured.
            </h3>
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

export default withStyles(styles)(ErrorPage);
