import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
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
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px 0`
  },
  hideFooter: {
    position: 'absolute',
    top: -100
  }
});
const footers = [
  {
    title: 'Company',
    description: [ 'Team', 'History', 'Contact us', 'Locations' ]
  },
  {
    title: 'Features',
    description: [ 'Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one' ]
  },
  {
    title: 'Resources',
    description: [ 'Resource', 'Resource name', 'Another resource', 'Final resource' ]
  },
  {
    title: 'Legal',
    description: [ 'Privacy policy', 'Terms of use' ]
  }
];
class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classNames(classes.layout, classes.footer)}>
        <Grid container spacing={0} justify='space-evenly' wrap='wrap'>
          {footers.map((footer) => (
            <Grid item key={footer.title} className={classes.footerItem}>
              <Typography variant='h6' color='textPrimary' gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map((item) => (
                <Typography key={item} variant='subtitle1' color='textSecondary'>
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Typography color='textSecondary' align='center' className={classes.credit}>
          Limitless Estates
          {': '}
          {'Built with '}
          <span role='img' aria-label='Love'>
            ❤️
          </span>
          {' by the '}
          <Button color='inherit'>Aitech</Button>
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
