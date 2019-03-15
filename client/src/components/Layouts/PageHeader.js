import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  cardTitle: {
    background: theme.palette.grey[100],
    color: 'rgba(0,0,0,0.87)',
    borderRadius: 0
  },
  gridItem: {
    maxHeight: '700px'
  }
});
const PageHeader = props => {
  const { classes } = props;
  const imgurl = props.imgSrc;
  const imgHeight = props.imgHeight;
  return (
    <div>
      <Card elevation={0} className={classes.cardTitle}>
        <Grid container justify="center" wrap="wrap" alignItems="center">
          <Grid item xs={12} className={classes.gridItem}>
            <div
              style={{
                background: `url(${imgurl}) no-repeat ${props.position}`,
                backgroundSize: 'cover',
                height: imgHeight,
                minHeight: '100px'
              }}
              className={classes.headerImage}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(PageHeader);
