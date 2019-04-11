import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  avatar: {
    [theme.breakpoints.down('xs')]: {
      width: '8em',
      height: '8em',
      margin: 10
    },
    [theme.breakpoints.up('sm')]: {
      margin: 10,
      width: '10em',
      height: '10em'
    }
  },
  cardHeader: {
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  },
  headerText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      marginTop: theme.spacing.unit
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 2
    }
  },
  subHeaderText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 2
    }
  },
  cardStyle: {
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  media: {
    borderRadius: '50%'
  },
  cardInfo: {
    paddingTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    flexWrap: 'wrap'
  },
  center: {
    textAlign: 'center'
  },
  root: {
    flexGrow: 1
  }
});

function Lalita(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" wrap="wrap">
        <Grid item>
          <Card style={{ marginBottom: '16px' }}>
            <CardHeader
              avatar={
                <Avatar
                  src="https://i.imgur.com/Lok4G0b.jpg?1"
                  className={classes.avatar}
                />
              }
              title={
                <Typography
                  variant="h3"
                  paragraph
                  className={classes.headerText}
                >
                  Lalita Patipaksiri
                </Typography>
              }
              subheader={
                <Typography
                  variant="body2"
                  paragraph
                  className={classes.subHeaderText}
                >
                  Managing Partner, Limitless Estates LLC <br /> Entrepreneur |
                  Athlete | Operator
                </Typography>
              }
              className={classes.cardHeader}
            />
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Biography" />
            <CardContent>
              <Typography variant="body1">
                My passion is in helping others and making a difference in any
                way I can. I find gratitude in helping others find solutions and
                I strive to make a memorable impact on others. I enjoy
                contributing this aspect to whomever I can and that’s what makes
                it different from a “have to do” to a “love to do.” I have
                experience with operations management; staff development;
                revenue management; expense and budget management; food &
                beverage operations; inventory management; merchandise
                administration; driving sales; leverage pricing; marketing; and
                social media marketing.
                <br />
                <br />
                At a young age, I quickly learned the meaning of discipline and
                dedication. I picked up the game of golf when I was 10, was
                playing in competitive tournaments by the time I was 13, and by
                the time I was 17, I had traveled and competed in 34 of 50
                states.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Real Estate" />
            <CardContent>
              <Typography variant="body1">
                I am the Co-Founder and Managing Partner of Limitless Estates,
                LLC. I am involved with all aspects of the company such as
                research, acquisitions, management, operations, and marketing,
                but have a specific focus on investor relations. I have been
                successful at raising over $300k to fund my own sponsorship
                throughout the course of 3 years during my time as a
                professional athlete. Through experience, I can highlight the
                fact that the importance of a company’s sponsorship success is
                defined by the end result being beneficial to both parties and
                the importance to have an alignment of passion and goals.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Education & Amateur Status" />
            <CardContent>
              <Typography variant="body1">

              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Professional Career" />
            <CardContent>
              <Typography variant="body1">

              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Golf Industry" />
            <CardContent>
              <Typography variant="body1">

              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Other" />
            <CardContent>
              <Typography variant="body1">

              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Lalita);