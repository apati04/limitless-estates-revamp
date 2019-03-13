import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "relative"
  },
  media: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      height: "300px"
    }
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

function WhyInvestComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        justify="center"
        alignItems="center"
        wrap="wrap"
      >
        <Grid item lg={10} md={10} sm={12}>
          <Card>
            <CardHeader
              avatar={
                <CardMedia
                  component="img"
                  alt="why-invest-in-multifamily"
                  image="https://i.imgur.com/f4FJAIJ.jpg?1"
                  title="Why Invest in Multifamily"
                  className={classes.media}
                />
              }
              title={
                <Typography
                  className={classes.contentHeader}
                  gutterBottom
                  align="left"
                  variant="h2"
                >
                  Why Invest in Multifamily
                </Typography>
              }
            />

            <CardContent className={classes.cardBody}>
              <Typography
                align="left"
                className={classes.content}
                gutterBottom
                variant="h6"
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
              <Typography
                align="left"
                className={classes.content}
                variant="h6"
                gutterBottom
              >
                When it comes to real estate investments, we focus in
                multifamily apartment complexes because of the control it
                provides in determining the investments results. Some of the
                most powerful factors in real estate are control, debt
                (leverage), and taxes. For the average investor, leverage is
                commonly used in real estate, but not in stocks or private
                lending. In addition, the IRS and owners of investment rental
                property might as well be best friends because the IRS has made
                so many rules to benefit us!
              </Typography>
              <Typography
                align="left"
                className={classes.content}
                gutterBottom
                variant="h6"
              >
                In multifamily (5+ units) or other commercial investment real
                estate, the value of the property is based on the income the
                property produces. This is exactly why the wealthy focus on
                commercial property such as multifamily apartment complexes.
                Being that you control the income and expenses in a property,
                you also control the value. What this means is if you have a way
                to increase income either by raising rents, billing residents
                back for utilities, or adding any other source of ancillary
                income to the operations of the property, you will also add
                value. Also, if you decrease expenses by renegotiating operating
                expense costs, billing residents back for utilities reducing
                turnovers and vacancy, putting in energy efficient light bulbs
                and plumbing fixtures, or ANY other way to cut operating
                expenses, you increase the value of your property.
              </Typography>
              <Typography
                align="left"
                className={classes.content}
                gutterBottom
                variant="h6"
              >
                An article for more tips on ways to increase rents (some may not
                apply to all of our investments) that our team will implement to
                drive the value of our properties can be found{" "}
                <a
                  href="https://www.biggerpockets.com/renewsblog/13-ways-increase-rent-add-rental-property/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(WhyInvestComponent);
