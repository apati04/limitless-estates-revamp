import "typeface-roboto";
import React, { Fragment } from "react";
import { MobileView, BrowserView } from "react-device-detect";
import DesktopNav from "./Desktop";
import MobileTopNav from "./Mobile/MobileTopNav";
import { withStyles } from "@material-ui/core/styles";
/**
 * xs, extra-small: 0px or larger
  sm, small: 600px or larger
  md, medium: 960px or larger
  lg, large: 1280px or larger
  xl, extra-large: 1920px or larger
 */
const styles = theme => ({
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  responsiveStyle: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
function NavMain(props) {
  const { classes } = props;
  return (
    <Fragment>
      <BrowserView>
        <div className={classes.desktop}>
          <DesktopNav />
        </div>
        <div className={classes.responsiveStyle}>
          <MobileTopNav />
        </div>
      </BrowserView>

      <MobileView>
        <MobileTopNav />
      </MobileView>
    </Fragment>
  );
}

export default withStyles(styles)(NavMain);
