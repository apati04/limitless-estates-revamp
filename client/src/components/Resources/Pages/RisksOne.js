import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import risk from "../api/risks_p1";

const styles = theme => ({
  cardHeader: {
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
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
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up("sm")]: {
      margin: 0,
      padding: 0,
      boxShadow: "unset",
      borderRadius: 0
    }
  },
  media: {
    display: "block",
    width: "100%",
    height: "auto",
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
    flexGrow: 1,
    background: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      margin: 0
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
  bodyContentHeader: {
    borderBottom: "0.1rem solid rgba(0,0,0,0.87)",
    paddingBottom: "4px"
  },
  cardTitle: {
    background: theme.palette.grey[100],
    color: "rgba(0,0,0,0.87)",
    borderRadius: 0
  },
  cardTitleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  cardBodyGrid: {
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0
    }
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
  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.cardTitle}>
        <Grid container justify="center" wrap="wrap" alignItems="center">
          <Grid item md={6}>
            <img
              alt="risks-when-investing-in-real-estate"
              src="https://i.imgur.com/zneMI2U.jpg"
              className={classes.media}
            />
          </Grid>
          <Grid item md={6} style={{ paddingLeft: "16px" }}>
            <Typography align="left" variant="overline" color="secondary">
              <span style={{ borderBottom: "1px solid" }}>Resources</span>
            </Typography>
            <Typography
              align="left"
              gutterBottom
              variant="h4"
              className={classes.cardTitleText}
            >
              Risks With Investing in Real Estate
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Grid
        container
        justify="center"
        alignItems="center"
        wrap="wrap"
        className={classes.cardBodyGrid}
      >
        <Grid item lg={8} md={10} sm={12}>
          <Typography
            variant="caption"
            style={{ color: "rgba(0,0,0, 0.5)", paddingLeft: "16px" }}
            gutterBottom
          >
            Home > Resources > Investing Risks
          </Typography>
          {loadPage()}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(RisksOne);
