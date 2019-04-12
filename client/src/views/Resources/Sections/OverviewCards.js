import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
// @material-ui/icons
import Card from 'components/Card/Card';

import { Link, withRouter } from 'react-router-dom';
import Button from 'components/CustomButtons/Button';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';
import NotesIcon from '@material-ui/icons/Notes';
import typographyStyle from 'assets/jss/material-kit-react/components/typographyStyle.jsx';
import api from '../api/resource_api';

import { cardTitle } from 'assets/jss/material-kit-react.jsx';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles';
const styles = theme => ({
  ...productStyle,
  ...typographyStyle,
  cardTitle,
  ...imagesStyles,
  imgCardOverlay: {
    ...imagesStyles.imgCardOverlay,
    background: 'rgba(0,0,0,0.67)',
    borderRadius: '6px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      padding: '1.875rem'
    }
  },
  iconLeft: {
    marginRight: '10px'
  }
});
class OverviewCards extends React.Component {
  loadCards = () => {
    const { classes } = this.props;
    const colors = ['primary', 'success', 'warning', 'danger'];
    return api.map((item, index, arr) => {
      console.log('item; ', item);
      if (index === arr.length - 1) {
        return (
          <GridItem xs={12} sm={12} md={12} key={index + item.type}>
            <Card>
              <div
                style={{
                  background: `url(${item.image}) no-repeat center`,
                  backgroundSize: 'cover',
                  height: '334px',
                  borderRadius: '6px'
                }}
                className={classNames(classes.imgCardTop, classes.imgRaised)}
              />
              <div className={classes.imgCardOverlay}>
                <div style={{ maxWidth: '32em' }}>
                  <h6>{item.tag}</h6>
                  <Link to={`/resources/${item.slug}`}>
                    <h3
                      style={{ color: 'white', marginTop: 0 }}
                      className={classes.title}
                    >
                      {item.title}
                    </h3>
                  </Link>
                  <p
                    style={{
                      color: 'white',
                      fontWeight: 400,
                      marginBottom: '10px',
                      lineHeight: '24px',
                      overflowWrap: 'break-word'
                    }}
                    className={classes.description}
                  >
                    {item.headline}
                  </p>
                  <Button
                    component={props => (
                      <Link {...props} to={`/resources/${item.slug}`} />
                    )}
                    style={{ marginTop: 'auto' }}
                    round
                    color="info"
                  >
                    <NotesIcon className={classes.iconLeft} />
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          </GridItem>
        );
      }
      return (
        <GridItem xs={12} sm={12} md={6} key={index + item.type}>
          <Card>
            <div
              style={{
                background: `url(${item.image}) no-repeat center`,
                backgroundSize: 'cover',
                height: '334px',
                borderRadius: '6px'
              }}
              className={classNames(classes.imgCardTop, classes.imgRaised)}
            />

            <div className={classes.imgCardOverlay}>
              <h6>{item.tag}</h6>

              <Link
                to={{
                  pathname: `resources/${item.slug}`,
                  search: item.params || ''
                }}
              >
                <h3
                  style={{ color: 'white', marginTop: 0 }}
                  className={classes.title}
                >
                  {item.title}
                </h3>
              </Link>
              <p
                style={{
                  color: 'white',
                  fontWeight: 400,
                  marginBottom: '10px',
                  lineHeight: '24px',
                  overflowWrap: 'break-word',
                  width: '80%'
                }}
                className={classes.description}
              >
                {item.headline}
              </p>
              <Button
                component={props => (
                  <Link
                    {...props}
                    to={{
                      pathname: `resources/${item.slug}`,
                      search: item.params || ''
                    }}
                  />
                )}
                style={{ alignSelf: 'bottom' }}
                round
                color={colors[index]}
              >
                <NotesIcon className={classes.iconLeft} />
                Read More
              </Button>
            </div>
          </Card>
        </GridItem>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>
              Resources for Investing
            </h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer justify="center" alignItems="center">
            {/* <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Inspire Others"
                description="this description should be about the podcast and should target the big players. the goal here is to attract partners, get people on your podcast or get your name around. the icon name is cast_connected"
                icon={CastConnected}
                iconColor="info"
                vertical
              />
            </GridItem> */}

            {this.loadCards()}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OverviewCards);
