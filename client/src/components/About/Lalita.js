import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
const styles = theme => ({
  avatar: {
    margin: 10,
    width: theme.spacing.unit * 26,
    height: theme.spacing.unit * 26
  },
  cardStyle: {
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  },
  media: {
    borderRadius: '50%'
  },
  cardHeader: {
    display: 'flex',
    alignContent: 'stretch'
  },
  bigAvatar: {
    padding: theme.spacing.unit * 3,
    borderRadius: '50%',
    width: '100%',
    margin: 10
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
    <React.Fragment>
      <Card style={{ marginBottom: '16px' }}>
        <CardHeader
          avatar={
            <Avatar
              src="https://i.imgur.com/Lok4G0b.jpg?1"
              className={classes.avatar}
            />
          }
          title={
            <Typography variant="h3" gutterBottom component="h1">
              Lalita Patipaksiri
            </Typography>
          }
          subheader={
            <Typography variant="body2" gutterBottom component="h1">
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
          <Typography component="p" variant="body1">
            My passion is in helping others and making a difference in any way I
            can. I find gratitude in helping others find solutions and I strive
            to make a memorable impact on others. I enjoy contributing this
            aspect to whomever I can and that’s what makes it different from a
            “have to do” to a “love to do.” I have experience with operations
            management; staff development; revenue management; expense and
            budget management; food & beverage operations; inventory management;
            merchandise administration; driving sales; leverage pricing;
            marketing; and social media marketing.
            <br />
            <br />
            At a young age, I quickly learned the meaning of discipline and
            dedication. I picked up the game of golf when I was 10, was playing
            in competitive tournaments by the time I was 13, and by the time I
            was 17, I had traveled and competed in 34 of 50 states.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardHeader title="Real Estate" />
        <CardContent>
          <Typography component="p" variant="body1">
            I am the Co-Founder and Managing Partner of Limitless Estates, LLC.
            I am involved with all aspects of the company such as research,
            acquisitions, management, operations, and marketing, but have a
            specific focus on investor relations. I have been successful at
            raising over $300k to fund my own sponsorship throughout the course
            of 3 years during my time as a professional athlete. Through
            experience, I can highlight the fact that the importance of a
            company’s sponsorship success is defined by the end result being
            beneficial to both parties and the importance to have an alignment
            of passion and goals.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardHeader title="Education & Amateur Status" />
        <CardContent>
          <Typography component="p" variant="body1">
            I attended UC Irvine on a full-ride athletic scholarship but was
            raised and believed to always put my academics first. I graduated
            from UC Irvine in June 2012 with a degree in Sociology and minor in
            Public Health. Out of my 4 years’ attendance, I was a 3-time Dean’s
            list honoree, 3-time Big West Scholar-Athlete, First Team All Big
            West, Big West Player of the Month in March 2012, led the nation in
            NCAA D1 Par 3 scoring average in 2009 and made UC Irvine history
            being selected for 2011 NCAA All-Star golf team. I ended my amateur
            career with a win at the 2012 Long Beach City Women’s Championship,
            which gave me the confidence boost to pursue golf at a higher level.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardHeader title="Professional Career" />
        <CardContent>
          <Typography component="p" variant="body1">
            I competed on the LPGA Symetra Tour, Cactus Tour and Canadian Tour.
            I got through my professional golf career by the help of sponsors
            and endorsements. Since golf is an individual sport, I worked hard
            to create an image for myself and be my own brand. I learned to
            represent myself in a way that would make sponsors interested to
            invest in me and my golf game. I was successful at raising over
            $300k to fund my own sponsorship throughout the course of 3 years.
            Through experience, I can highlight the fact that the importance of
            a company’s sponsorship success is defined by the end result and
            being beneficial to both parties. In 2005, I appeared and competed
            on a reality TV show, Golf Channel’s Altered Course Montego Bay.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardHeader title="Golf Industry" />
        <CardContent>
          <Typography component="p" variant="body1">
            Since July 2016, I have worked for Strato Partners as a Regional
            Sales Director and Assistant General Manager. In just 2 years, I now
            hold the position of General Manager. Within this job, I have made
            myself familiar and competent with defining what is important in
            managing a $4 million+ business. Strato Partners make it a #1
            priority to have each and every guest leave with a great customer
            experience.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardHeader title="Other" />
        <CardContent>
          <Typography component="p" variant="body1">
            I constantly set goals for myself, mentally and physically, and I
            persistently try to achieve them. I am continually learning to grow
            and improve as a person by pushing limits. I plan to work my way out
            of the golf industry and completely out of my comfort zone. I have
            found real estate to be my new quest and chase in life. I am driven
            and relentless, and these skills make me a valuable asset to my
            team. My goals for the future would be to become an all-around real
            estate expert, continually grow my portfolio and to be an
            entrepreneur duo with my fiancé. For me, it would be so special to
            be able to look back one day to see how far we’ve come and share the
            successes together.
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default withStyles(styles)(Lalita);
