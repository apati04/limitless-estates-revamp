import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  heroUnit: {
    position: 'relative'
  },
  heroContent: {
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 6}px`,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing.unit * 8}px 0`
    }
  }
});
function HeroUnit(props) {
  const { classes } = props;
  return (
    <div className={classes.heroUnit}>
      <div id="hero-container" className={classes.heroContent}>
        {props.children}
      </div>
    </div>
  );
}
export default withStyles(styles)(HeroUnit);
/**
 *         
 * @heroButtons
 * <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
 */
