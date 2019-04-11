import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import InfoArea from 'components/InfoArea/InfoArea';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
// core components
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';
import Button from 'components/CustomButtons/Button';
import { cardTitle } from 'assets/jss/material-kit-react.jsx';

const styles = {
  ...imagesStyles,
  ...productStyle,
  cardTitle,
  textMuted: {
    color: '#6c757d'
  },
  textLeft: {
    textAlign: 'left'
  }
};
class ProductSection extends React.Component {
  loadCard = () => {
    const { classes, data } = this.props;
    return data.pages.map(
      (
        { id, company, name, phone, address, logo, email, website, misc },
        index
      ) => {
        return (
          <GridItem key={id} xs={12} sm={12} md={6}>
            <Card
              style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              className={classes.textLeft}
            >
              <img
                style={{ padding: '1rem 2rem' }}
                className={classes.imgCardTop}
                src={logo}
                alt="Card-img-cap"
                title={company}
              />

              <CardBody>
                <h4 className={classes.cardTitle}>{company}</h4>
                <p>{address}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <Button
                  simple
                  style={{
                    padding: 0,
                    textTransform: 'lowercase'
                  }}
                  color="primary"
                  size="lg"
                  href={website}
                >
                  {website}
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        );
      }
    );
  };
  render() {
    const { classes, data } = this.props;
    console.log('data: ', data);
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>{data.snippet}</h2>
            <h5 className={classes.description}>
              Keep you user engaged by providing meaningful information.
              Remember that by this time, the user is curious, otherwise he
              wouldn't scroll to get here. Add a button if you want the user to
              see more.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>{this.loadCard()}</GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProductSection);
