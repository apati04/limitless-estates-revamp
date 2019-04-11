import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import profilePageStyle from 'assets/jss/material-kit-react/views/profilePage.jsx';
const styles = theme => ({
  ...profilePageStyle
});
class ProfilePageContainer extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    let color = 'info';
    if (this.props.name.includes('Lalita')) {
      color = 'rose';
    }
    return (
      <React.Fragment>
        <Parallax small filter image="https://i.imgur.com/3LUFyC1.jpg?1" />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={this.props.profileImg}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{this.props.name}</h3>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <h6>{this.props.role}</h6>
                        {/* <Button
                          component={props => <Link {...props} to="/" />}
                          justIcon
                          link
                          className={classes.margin5}
                        >
                          <i className={'fab fa-linkedin'} />
                        </Button>
                        <Button justIcon link className={classes.margin5}>
                          <i className={'fab fa-youtube'} />
                        </Button>
                        <Button justIcon link className={classes.margin5}>
                          <i className={'fab fa-facebook'} />
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>{this.props.description}</p>
              </div>
              <GridContainer justify="center" alignItems="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    color={color}
                    alignCenter
                    tabs={this.props.profileTabs.map(tab => ({
                      tabButton: tab.tabName,
                      tabContent: tab.tabContent
                    }))}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(ProfilePageContainer));
