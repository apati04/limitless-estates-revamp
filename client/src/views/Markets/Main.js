import React from 'react';

import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import loadContent from './loadContent';
function Main(props) {
  const { classes, api } = props;
  const { content, maps } = api;
  const [marketTitle, ...mainContent] = content;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Typography align="left" variant="h3" paragraph>
            {marketTitle.title.value}
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: 'left', fontSize: '1rem' }}
          >
            {loadContent(mainContent)}
          </Typography>
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          <GoogleMap
            height={maps.height}
            width={maps.width}
            centerMap={maps.geo}
            mapLng={maps.geo.lng}
            mapLat={maps.geo.lat}
            zoomLevel={maps.zoomLevel}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withRouter(withStyles(productStyle)(Main));
