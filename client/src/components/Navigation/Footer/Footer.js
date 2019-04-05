import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import footers from './footerFields';
import CallIcon from '@material-ui/icons/Call';
import Fab from '@material-ui/core/Fab';
const styles = theme => ({
  credit: {
    marginTop: theme.spacing.unit * 4
  },
  root: {
    flexGrow: 1
  },
  layout: {
    ...theme.container
    // width: 'auto',
    // marginLeft: theme.spacing.unit * 3,
    // marginRight: theme.spacing.unit * 3,
    // [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
    //   width: '100%',
    //   marginLeft: 'auto',
    //   marginRight: 'auto'
    // }
  },
  footer: {
    borderTop: `0.0625rem solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px 0`,
    backgroundColor: theme.palette.background.default
  },
  hideFooter: {
    position: 'absolute',
    top: -100
  },
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer
        className={classNames(classes.layout, classes.footer) + ' sub-footer'}
      >
        <Grid container spacing={0} justify="space-evenly" wrap="wrap">
          {footers.map((footer, index) => (
            <Grid
              item
              key={footer.title || index}
              className={classes.footerItem}
            >
              {footer.src ? (
                <div style={{ padding: '0 .5rem' }}>
                  <img
                    src={footer.src}
                    alt="footer logo"
                    title="limitless estates footer logo"
                  />
                </div>
              ) : (
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
              )}
              {footer.description.map(item => (
                <Typography
                  key={item}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
          <Grid item className={classes.footerItem}>
            <div>
              <Fab
                component="a"
                href="https://ehypauluugknktzawdwva-free.10to8.com/"
                style={{ whiteSpace: 'nowrap', fontSize: '14px' }}
              >
                <CallIcon className={classes.margin} />
                Schedule a Call
              </Fab>
            </div>
          </Grid>
        </Grid>

        <Typography
          color="textSecondary"
          align="center"
          className={classes.credit}
        >
          Limitless Estates
          {': '}
          {'Built with '}
          <span role="img" aria-label="Love">
            ❤️
          </span>
          {' by the '}
          <Button color="inherit">Aitech</Button>
          {' team.'}
        </Typography>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
