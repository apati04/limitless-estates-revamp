import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';

import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import profilePageStyle from 'assets/jss/material-kit-react/views/profilePage.jsx';
import ProfileContainer from './ProfileContainer.jsx';
import lalita from './Profile/lalita.js';
class ProfilePage extends React.Component {
  loadPage = () => {
    const { id } = this.props.match.params;
    switch (id) {
      case 'lalita':
        return <ProfileContainer {...lalita} />;
      case 'kyle':
        return <ProfileContainer {...lalita} />;
      default:
        return <div />;
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="true"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />
        {this.loadPage()}
        <Footer />
      </div>
    );
  }
}

export default withRouter(withStyles(profilePageStyle)(ProfilePage));
