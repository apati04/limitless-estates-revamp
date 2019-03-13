import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  avatar: {
    [theme.breakpoints.down("xs")]: {
      width: "8em",
      height: "8em",
      margin: 10
    },
    [theme.breakpoints.up("sm")]: {
      margin: 10,
      width: "10em",
      height: "10em"
    }
  },
  cardHeader: {
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  },
  headerText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      marginTop: theme.spacing.unit
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing.unit * 2
    }
  },
  subHeaderText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px"
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing.unit * 2
    }
  },
  cardStyle: {
    marginBottom: theme.spacing.unit / 2,
    padding: theme.spacing.unit * 2
  },
  media: {
    backgroundPosition: "center center",
    objectFit: "cover",
    backgroundAttachment: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      height: "300px"
    }
  },
  cardInfo: {
    paddingTop: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "stretch",
    flexWrap: "wrap"
  },
  center: {
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  },
  cardBody: {
    minHeight: "calc(100vh - 464px)",
    padding: "1.25em",
    [theme.breakpoints.up("md")]: {
      padding: "4rem"
    }
  },
  content: {
    marginBottom: theme.spacing.unit * 3
  },
  contentHeader: {
    borderBottom: "1px solid rgba(0,0,0,0.3)",
    paddingBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem"
    }
  }
});

function RisksOne(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card>
        <CardMedia
          component="img"
          alt="why-invest-in-multifamily"
          height="400"
          image="https://i.imgur.com/zneMI2U.jpg"
          title="Risks when Investing in Real Estate"
          className={classes.media}
        />
      </Card>
      <Grid
        container
        spacing={0}
        justify="center"
        alignItems="center"
        wrap="wrap"
      >
        <Grid item lg={8} md={10} sm={12}>
          <Card className={classes.cardStyle}>
            <Typography
              className={classes.contentHeader}
              gutterBottom
              align="left"
              variant="h2"
            >
              Risks when Investing in Real Estate
            </Typography>

            <CardContent>
              <Typography
                align="left"
                className={classes.content}
                gutterBottom
                variant="body1"
              >
                Have you heard stats such as “80% of millionaires attribute
                their wealth to real estate”? Or heard stories of living the
                good life off passive cash flow from rental property? Combine
                this with the recent years of unpredictable, disappointing stock
                markets, and you get masses of people realizing they have no
                control over many of their investments and therefore their life
                savings. Tired of blindly following the crowd of 401K stuffers,
                many have started looking at why so many wealthy people own real
                estate.
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
                I attended UC Irvine on a full-ride athletic scholarship but was
                raised and believed to always put my academics first. I
                graduated from UC Irvine in June 2012 with a degree in Sociology
                and minor in Public Health. Out of my 4 years’ attendance, I was
                a 3-time Dean’s list honoree, 3-time Big West Scholar-Athlete,
                First Team All Big West, Big West Player of the Month in March
                2012, led the nation in NCAA D1 Par 3 scoring average in 2009
                and made UC Irvine history being selected for 2011 NCAA All-Star
                golf team. I ended my amateur career with a win at the 2012 Long
                Beach City Women’s Championship, which gave me the confidence
                boost to pursue golf at a higher level.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Professional Career" />
            <CardContent>
              <Typography variant="body1">
                I competed on the LPGA Symetra Tour, Cactus Tour and Canadian
                Tour. I got through my professional golf career by the help of
                sponsors and endorsements. Since golf is an individual sport, I
                worked hard to create an image for myself and be my own brand. I
                learned to represent myself in a way that would make sponsors
                interested to invest in me and my golf game. I was successful at
                raising over $300k to fund my own sponsorship throughout the
                course of 3 years. Through experience, I can highlight the fact
                that the importance of a company’s sponsorship success is
                defined by the end result and being beneficial to both parties.
                In 2005, I appeared and competed on a reality TV show, Golf
                Channel’s Altered Course Montego Bay.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Golf Industry" />
            <CardContent>
              <Typography variant="body1">
                Since July 2016, I have worked for Strato Partners as a Regional
                Sales Director and Assistant General Manager. In just 2 years, I
                now hold the position of General Manager. Within this job, I
                have made myself familiar and competent with defining what is
                important in managing a $4 million+ business. Strato Partners
                make it a #1 priority to have each and every guest leave with a
                great customer experience.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardStyle}>
            <CardHeader title="Other" />
            <CardContent>
              <Typography variant="body1">
                I constantly set goals for myself, mentally and physically, and
                I persistently try to achieve them. I am continually learning to
                grow and improve as a person by pushing limits. I plan to work
                my way out of the golf industry and completely out of my comfort
                zone. I have found real estate to be my new quest and chase in
                life. I am driven and relentless, and these skills make me a
                valuable asset to my team. My goals for the future would be to
                become an all-around real estate expert, continually grow my
                portfolio and to be an entrepreneur duo with my fiancé. For me,
                it would be so special to be able to look back one day to see
                how far we’ve come and share the successes together.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(RisksOne);
