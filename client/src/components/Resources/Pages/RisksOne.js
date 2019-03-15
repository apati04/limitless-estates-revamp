import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import BlogTitle from '../../../layouts/BlogTitle';
import risk from '../api/risks_p1';
import PageHeader from '../../../layouts/PageHeader';
const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 0
    }
  },
  cardStyle: {
    marginBottom: theme.spacing.unit / 2,
    padding: theme.spacing.unit * 2,

    [theme.breakpoints.up('md')]: {
      margin: 0,
      padding: 0,
      boxShadow: 'unset',
      borderRadius: 0
    }
  },
  content: {
    marginBottom: theme.spacing.unit * 3
  },
  bodyContentHeader: {
    borderBottom: '0.1rem solid rgba(0,0,0,0.87)',
    paddingBottom: '4px'
  },
  cardBodyGrid: {
    padding: '40px'
    // [theme.breakpoints.down('sm')]: {
    //   margin: '16px',
    //   padding: 0
    // }
  },

  gridItem: {
    padding: theme.spacing.unit * 2
  }
});

function RisksOne(props) {
  function loadPage() {
    const { classes } = props;
    return risk.map(({ title, body }, index) => {
      if (index === 0) {
        return (
          <Card key={index} className={classes.cardStyle}>
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
  const { classes } = props;
  const imgSrc = 'https://i.imgur.com/LZDGUNH.jpg?1';
  return (
    <div className={classes.root}>
      <PageHeader imgSrc={imgSrc} imgHeight="560px" position="center 80%" />
      <Grid
        container
        justify="center"
        alignItems="center"
        wrap="wrap"
        className={classes.cardBodyGrid}
      >
        <Grid item lg={8} md={10} xs={12}>
          <div className={classes.gridItem}>
            <BlogTitle text="Risks When Investing in Real Estate" />
          </div>
        </Grid>
        <Grid item lg={8} md={10} xs={12}>
          {loadPage()}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(RisksOne);
