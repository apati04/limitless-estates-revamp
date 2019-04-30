import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer';
import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle';
import Staff from './Staff';
import Advisors from './Advisors';
class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Limitless Estates Team</h2>
        <div>
          <GridContainer justify="center">
            <Staff classes={classes} />
          </GridContainer>
        </div>
        <h2 className={classes.title}>Our Advisors</h2>
        <div>
          <GridContainer justify="center">
            <Advisors classes={classes} />
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
