import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import Typography from "@material-ui/core/Typography";

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
    borderRadius: "50%"
  },
  cardHeader: {
    display: "flex",
    alignContent: "stretch"
  },
  bigAvatar: {
    padding: theme.spacing.unit * 3,
    borderRadius: "50%",
    width: "100%",
    margin: 10
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
  }
});

function Kyle(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card style={{ marginBottom: "16px" }}>
        <CardHeader
          avatar={
            <Avatar
              src="https://i.imgur.com/qC2iaYa.jpg?2"
              className={classes.avatar}
            />
          }
          title={
            <Typography variant="h3" gutterBottom component="h1">
              Kyle Mitchell
            </Typography>
          }
          subheader={
            <Typography variant="body2" gutterBottom component="h1">
              Managing Partner, Limitless Estates LLC <br /> Investor |
              Entrepreneur | Business Owner | Operator{" "}
            </Typography>
          }
          className={classes.cardHeader}
        />
      </Card>
      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Biography
          </Typography>
          <Typography>
            My passion is in helping others reach their goals in all areas of
            life by doing things the right way and creating long lasting
            relationships based on trust and clarity. I have experience with
            operations management; staff development; revenue generation;
            expense management; food & beverage operations; budgeting; sales;
            capital improvement projects; single family homes; buying and
            selling real estate; and operating boutique fitness studios.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Real Estate Investor
          </Typography>
          <Typography>
            I have been investing in income producing Real Estate since 2015, I
            currently own 9 single family homes in 3 different markets
            (Illinois, Ohio & Arkansas) totaling to $1 million. I am Managing
            Partner and Co-Founder of Limitless Estates, LLC, our vision at
            Limitless Estates is to provide A class living to lower income
            housing by putting our residents first and instilling a sense of
            community while inspiring others to do the same. My goal for 2019 is
            to own 400 apartment units and my 5-year goal is to own 5,000
            apartment units.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Club Pilates
          </Typography>
          <Typography>
            I am a Club Pilates franchise owner in Southern California. Club
            Pilates was founded in San Diego in 2007 and has expanded across the
            nation, bringing Pilates to hundreds of thousands of people. In
            2017, Club Pilates served up over 2.2 million workouts to their
            dedicated members. We believe that Pilates is the path to a fuller,
            more satisfying physical existence. We believe that being in control
            of your body helps you to be in control of your life. And best of
            all, we believe that you can start anytime! In 2016, Club Pilates
            was recognized as #31 in Entrepreneur Magazine’s Top New Franchise
            and most recently in 2017 as #361 in the Entrepreneur Franchise
            500®.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Real Estate Agent
          </Typography>
          <Typography>
            I am a licensed Realtor in California and have been buying and
            selling Real Estate since 2015. One of the ways I love to give back
            is by donating 20% of my commissions to the local charities of my
            client’s choice. My goal is to one day be able to donate 100% of my
            commissions back to local charities.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            American Golf
          </Typography>
          <Typography>
            Previously a Regional Manager for American Golf and have 15+ years
            of experience in operations management including overseeing more
            than $18 million in revenue and 225+ team members. I began working
            for American Golf in 1997 and worked my way up from a cashier in
            high school to General Manager by the age of 21. I also serve on the
            board of Directors for the First Tee of Greater Pasadena where our
            mission is to impact the lives of young people from all walks of
            life by reinforcing values like integrity, respect and perseverance
            through educational programs that build character, instill
            life-enhancing values and promote healthy choices through the game
            of golf.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Other
          </Typography>
          <Typography>
            I played golf Professionally for a few years around California
            before working full-time for American Golf. I am a dog owner &
            lover, I enjoy cooking, traveling, fitness & sports. I currently
            live in Southern California and the thing I am most looking forward
            to this year is planning my wedding with my fiancé. The most
            important thing I have learned over the last 12 months is how
            important it is to spend time and care for your family, nothing is
            more important than family. I am a big believer in a positive
            mindset, continued education, improving yourself day by day and
            taking massive action.
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default withStyles(styles)(Kyle);
