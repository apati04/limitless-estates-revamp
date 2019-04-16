import React from 'react';
// @material-ui/core components
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
// core components
import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';
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
class FeaturedCompany extends React.Component {
  loadCard = () => {
    const { classes, data } = this.props;
    return data.pages.map(
      (
        { id, company, name, phone, address, logo, email, website, misc },
        index
      ) => {
        return (
          <GridItem key={id} xs={12} sm={12} md={4}>
            <Card
              style={{
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

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="Breadcrumb"
            >
              <NavLink className={classes.navLink} to="/resources">
                <Typography style={{ color: '#337ab7' }} variant="body2">
                  All Resources
                </Typography>
              </NavLink>
              <Typography color="textPrimary" variant="body2">
                {data.title}
              </Typography>
            </Breadcrumbs>
          </GridItem>
        </GridContainer>
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
        <GridContainer justify="center">{this.loadCard()}</GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(FeaturedCompany);
