import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PageHeader from '../../Layouts/PageHeader';
import Button from 'components/CustomButtons/Button';
import Icon from '@material-ui/core/Icon';
import risk from '../api/risks_p1';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 0
    }
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  content: {
    marginBottom: theme.spacing.unit * 3
  },
  bodyContentHeader: {
    borderBottom: '0.1rem solid rgba(0,0,0,0.87)',
    paddingBottom: '4px'
  },
  cardBodyGrid: {
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: 0
    }
  },
  appContainer: {
    ...theme.container
  },
  subTitleText: {
    marginLeft: '2px'
  }
});

function RisksOne(props) {
  function loadPage() {
    const { classes } = props;
    return risk.map(({ title, body }, index) => {
      if (index === 0) {
        return (
          <CardContent key={index}>
            <Typography className={classes.subTitleText}>
              Page 1 of 2
            </Typography>
            <Typography paragraph align="left" variant="h3" component="h1">
              Risks When Investing in Real Estate
            </Typography>

            <Typography align="left" paragraph variant="h5">
              {body}
            </Typography>
          </CardContent>
        );
      }
      return (
        <CardContent key={index}>
          <Typography variant="h6" paragraph component="h2">
            {title}
          </Typography>

          <Typography
            align="left"
            className={classes.content}
            paragraph
            variant="body1"
          >
            {body}
          </Typography>
        </CardContent>
      );
    });
  }
  const { classes } = props;
  const imgSrc = 'https://i.imgur.com/LZDGUNH.jpg?1';
  return (
    <div className={classes.root}>
      <PageHeader imgSrc={imgSrc} imgHeight="35em" position="center 80%" />
      <div className={classNames('main-content', classes.appContainer)}>
        <Card elevation={0}>
          <Grid container justify="center" alignItems="center" wrap="wrap">
            <Grid item xs={12} className={classes.cardBodyGrid}>
              {loadPage()}

              <CardContent style={{ textAlign: 'right' }}>
                <Button
                  variant="contained"
                  component={props => (
                    <Link to="/resources/investing-risks?page=2" {...props} />
                  )}
                  color="primary"
                  className={classes.button}
                >
                  Next Page
                  <Icon className={classes.rightIcon}>chevron_right</Icon>
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

export default withStyles(styles)(RisksOne);
