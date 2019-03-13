import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const style = theme => ({
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
  media: {
    display: "block",
    width: "100%",

    height: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "300px"
    }
  },
  gridItem: {
    maxHeight: "700px"
  }
});
const PageHeader = props => {
  const { classes } = props;
  return (
    <div>
      <Card elevation={0} className={classes.cardTitle}>
        <Grid container justify="center" wrap="wrap" alignItems="center">
          <Grid item xs={12} className={classes.gridItem}>
            <div
              style={{
                background: `url(${props.imgSrc}) no-repeat center center`,
                backgroundSize: "cover",
                height: "64vh"
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(PageHeader);
/**
 *          <Grid item md={6} style={{ paddingLeft: "16px" }}>
            <Typography align="left" variant="overline" color="secondary">
              <span style={{ borderBottom: "1px solid" }}>
                {props.overlineText}
              </span>
            </Typography>
            <Typography
              align="left"
              gutterBottom
              variant="h4"
              className={classes.cardTitleText}
            >
              {props.title}
            </Typography>
          </Grid>
 */
