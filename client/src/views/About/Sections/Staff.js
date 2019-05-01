import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import team from '../api/team';
import Truncate from 'react-truncate';

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
              <img
                src={photo.url}
                alt="..."
                width="236px"
                className={imageClasses}
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              {name}
              <br />
              <small className={classes.smallTitle}>{title}</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                <Truncate lines={4} ellipsis={'...'}>
                  {description}
                </Truncate>
              </p>
              <Button
                simple
                color="primary"
                component={props => <Link {...props} to={profilePage} />}
              >
                View Full Profile
              </Button>
            </CardBody>
            {/* <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + ' fab fa-twitter'} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + ' fab fa-instagram'} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + ' fab fa-facebook'} />
              </Button>
            </CardFooter> */}
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
