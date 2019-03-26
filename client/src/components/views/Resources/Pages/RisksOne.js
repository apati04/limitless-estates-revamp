import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import BlogTitle from '../../Layouts/BlogTitle';
import PageHeader from '../../Layouts/PageHeader';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import risk from '../api/risks_p1';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.background.paper,
    [theme.breakpoints.down ('sm')]: {
      padding: 0,
      margin: 0,
    },
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  cardStyle: {
    marginBottom: theme.spacing.unit / 2,
    padding: theme.spacing.unit * 2,

    [theme.breakpoints.up ('md')]: {
      margin: 0,
      padding: 0,
      boxShadow: 'unset',
      borderRadius: 0,
    },
  },
  content: {
    marginBottom: theme.spacing.unit * 3,
  },
  bodyContentHeader: {
    borderBottom: '0.1rem solid rgba(0,0,0,0.87)',
    paddingBottom: '4px',
  },
  cardBodyGrid: {
    margin: '16px 0',
    ...theme.container,
  },

  gridItem: {
    padding: theme.spacing.unit * 2,
  },
  subTitleText: {
    marginLeft: '2px',
  },
});

function RisksOne (props) {
  function loadPage () {
    const {classes} = props;
    return risk.map (({title, body}, index) => {
      if (index === 0) {
        return (
          <Card key={index} className={classes.cardStyle}>
            <div >
              <BlogTitle text="Risks When Investing in Real Estate" />
              <Typography className={classes.subTitleText}>
                Page 1 of 2
              </Typography>
            </div>
            <CardContent>
              <Typography
                align="left"
                className={classes.content}
                gutterBottom
                variant="h5"
              >
                {body}
              </Typography>
            </CardContent>
          </Card>
        );
      }
      return (
        <Card key={index} className={classes.cardStyle}>
          <CardHeader
            title={<span className={classes.bodyContentHeader}>{title}</span>}
          />
          <CardContent>
            <Typography
              align="left"
              className={classes.content}
              gutterBottom
              variant="body1"
            >
              {body}
            </Typography>
          </CardContent>
        </Card>
      );
    });
  }
  const {classes} = props;
  const imgSrc = 'https://i.imgur.com/LZDGUNH.jpg?1';
  return (
    <div className={classes.root}>
      <PageHeader imgSrc={imgSrc} imgHeight="560px" position="center 80%" />
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        wrap="wrap"
        className={classes.cardBodyGrid}
      >
        <Grid item lg={9} md={10} xs={12}>
          {loadPage ()}
        </Grid>
        <Grid item lg={9} md={10} xs={12}>
          <Card className={classes.cardStyle}>
            <CardContent style={{textAlign: 'right'}}>
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles (styles) (RisksOne);
