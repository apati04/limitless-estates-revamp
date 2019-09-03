import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import InfoArea from 'components/InfoArea/InfoArea';
import ChildSvg from './child-solid.svg';
import InspireSvg from './medapps-brands.svg';
import UsersSolid from './users-solid.svg';
import TrophySolid from './trophy-solid.svg';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';

const styles = theme => ({
  ...productStyle,
  iconSectionDiv: {
    border: '1px solid rgba(60,72,88,0.2)',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: 'rgba(60,72,88,0.1)'
    }
  },
  iconSection: {}
});
const childSvg = props => (
  <img {...props} src={ChildSvg} alt="avatar" title="Impacting Lives" />
);
const usersSvg = props => (
  <img {...props} src={UsersSolid} alt="avatar" title="Community Development" />
);
const inspireSvg = props => (
  <img {...props} src={InspireSvg} alt="avatar" title="Inspire Others" />
);
const trophySvg = props => (
  <img
    {...props}
    src={TrophySolid}
    alt="avatar"
    title="Create win win win scenarios"
  />
);
class FeatureSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>What we are about</h2>
            <h5 className={classes.description}>
              Our mission is to positively impact the lives of the people in our
              local neighborhoods through impact investing while achieving
              double digit returns for our investors.
            </h5>
          </GridItem>
        </GridContainer>
        <div style={{ marginTop: '64px' }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Impacting Lives"
                description=""
                icon={childSvg}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Community Development"
                description=""
                icon={usersSvg}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Inspire Others"
                description=""
                icon={inspireSvg}
                iconColor="info"
                vertical
              />
              {/* <Button>Learn More</Button> */}
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Create Win Win Win Scenarios"
                description=""
                icon={trophySvg}
                iconColor="success"
                vertical
              />
              {/* <Button>Learn More</Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FeatureSection);
