import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import team from '../api/team';
import Truncate from 'react-truncate';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Staff extends Component {
  loadCards = () => {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return team.map(
      ({ name, title, profilePage, photo, description }, index) => (
        <GridItem key={name} xs={12} sm={12} md={6}>
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={photo.url} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              {name}
              <br />
              <small className={classes.smallTitle}>{title}</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                <Truncate
                  lines={3}
                  trimWhitespace
                  ellipsis={<Link to={profilePage}>...Continue Reading</Link>}
                >
                  {description}
                </Truncate>
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + ' fab fa-twitter'} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + ' fab fa-instagram'} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + ' fab fa-facebook'} />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      )
    );
  };
  render() {
    return <React.Fragment>{this.loadCards()}</React.Fragment>;
  }
}

Staff.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Staff;
