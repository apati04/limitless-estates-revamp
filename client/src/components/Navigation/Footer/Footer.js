import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import footers from './footerFields';
import socialMedia from './socialFields';
const styles = theme => ({
  credit: {
    marginTop: theme.spacing.unit * 4
  },
  root: {
    flexGrow: 1
  },
  youtube: {
    background: '#ff0000',
    color: '#fff',
    textDecoration: 'none'
  },
  facebook: {
    textDecoration: 'none',
    color: '#fff',
    background: '#3b5998'
  },
  linkedIn: {
    textDecoration: 'none',
    color: '#fff',
    background: '#0077B5'
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
  avatar: {
    margin: 10
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {socialMedia.map(({ title, href, icon, label }, index) => (
                <Tooltip key={label} title={title}>
                  <Avatar
                    component="a"
                    href={href}
                    aria-label={label}
                    className={classNames(classes.avatar, classes[`${label}`])}
                  >
                    <i className={icon} />
                  </Avatar>
                </Tooltip>
              ))}
            </div>
            <div>
              <Tooltip title="Schedule a call on 10 to 8">
                <Fab
                  variant="extended"
                  size="medium"
                  style={{ background: '#00e676' }}
                  aria-label="Add"
                  className={classes.margin}
                  component="a"
                  href="https://ehypauluugknktzawdwva-free.10to8.com/"
                >
                  <CallIcon className={classes.extendedIcon} />
                  Schedule a Call
                </Fab>
              </Tooltip>
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
