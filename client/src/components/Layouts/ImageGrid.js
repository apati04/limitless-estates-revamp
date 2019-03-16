import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import tileData from './images/tileData';
import Hidden from '@material-ui/core/Hidden';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-beween',
    flex: 'grow',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: '80px',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  gridList: {
    width: '100%',
    height: 600,
    [theme.breakpoints.down('sm')]: {
      height: 800
    }
  }
});

const ImageGrid = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <GridList cellHeight={300} className={classes.gridList} cols={12}>
          {tileData.map((tile, i) => {
            const keyalt = tile.title + i;
            return (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={keyalt} />
              </GridListTile>
            );
          })}
        </GridList>
      </Hidden>
      <GridList cellHeight={300} className={classes.gridList} cols={4}>
        {tileData.map((tile, i) => {
          const keyalt = tile.title + i;
          return (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={keyalt} />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};

ImageGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGrid);
