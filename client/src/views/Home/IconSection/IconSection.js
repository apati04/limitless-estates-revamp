import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconTemplate from './iconTemplate';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
const styles = theme => ({
  root: {
    background: grey[50],
    padding: '40px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px'
    }
  },
  appContainer: theme.container
});
const Section02 = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        className={classes.appContainer + ' main-content'}
      >
        <Grid item>
          <IconTemplate
            icon="fas fa-child"
            title="Impacting Lives"
            iconSize={3 + 'rem'}
          />
        </Grid>
        <Grid item>
          <IconTemplate
            icon="fas fa-users"
            title="Community Development"
            iconSize={3 + 'rem'}
          />
        </Grid>
        <Grid item>
          <IconTemplate
            icon="fab fa-medapps"
            title="Inspire Others"
            iconSize={3 + 'rem'}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconTemplate
            icon="fas fa-trophy"
            title="Investment Options"
            iconSize={3 + 'rem'}
            description="Be in control of your retirement account and maximize your returns by using a Self-Directed IRA account to invest in real estate. You can get started in 4 simple steps."
            link="/self-directed-ira"
            linkText="Begin today!"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Section02);
