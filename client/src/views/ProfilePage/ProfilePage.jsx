import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { withRouter, Switch, Route } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import profile from 'assets/img/faces/christian.jpg';

import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';

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
        return <ProfileContainer />;
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
