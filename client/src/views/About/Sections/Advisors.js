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

import Truncate from 'react-truncate';
import advisors from '../api/advisors';
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Advisors extends Component {
  loadCards = () => {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return advisors.map(
      ({ name, title, profilePage, photo, description }, index) => (
        <GridItem key={name} xs={12} sm={12} md={4}>
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
                <Truncate lines={5} trimWhitespace ellipsis="...">
                  {description}
                </Truncate>
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                asdf
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

Advisors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Advisors);
