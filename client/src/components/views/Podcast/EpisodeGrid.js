import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import placeholderSquare from './placeholder-square.png';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Truncate from 'react-truncate';
import ReactHtmlParser from 'react-html-parser';
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    display: 'block'
  },
  gridListTile: {
    padding: theme.spacing.unit,
    margin: 0
  },
  imageStyle: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    paddingTop: '66.66667%'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 4}px`,
    [theme.breakpoints.up('840px')]: {
      width: 'calc(33.33333% -16px)',
      display: 'block'
    }
  },
  marginTop: {
    ...theme.container,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 4
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '66.66667%',
    width: '100%'
  },
  cardContent: {
    flex: 1,
    marginTop: theme.spacing.unit * 3,
    padding: 0
  },
  cardActions: {
    justifyContent: 'space-between',
    margin: `0 ${theme.spacing.unit}px`,
    padding: '8px 14px'
  },
  eventName: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // 'white-space': 'nowrap'
    lineHeight: 'normal'
  },
  eventDate: {},
  eventDetailText: {
    color: 'rgba(0,0,0,0.87)',
    fontWeight: '300',
    fontSize: '1rem'
  },
  gridContent: {
    padding: '4px',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  cardContentMargin: {
    margin: '0.rem 1rem'
  }
});

class EpisodeGrid extends Component {
  loadEpisodeList = () => {
    const { classes, episodes } = this.props;

    console.log();
    return episodes.map((item, index) => {
      return (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.cardGrid}
        >
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <CardMedia
                className={classes.cardMedia}
                image={`https://via.placeholder.com/300/0010ff?text=Ep. ${
                  item.episode_number
                }`}
                title="Image title"
              />

              <div className={classes.cardContent}>
                <Typography
                  align="left"
                  variant="h5"
                  component="div"
                  gutterBottom
                  className={classes.cardContentMargin}
                  noWrap
                >
                  Episode {item.episode_number}
                </Typography>
                <Typography variant="body1" component="div">
                  <Truncate
                    lines={4}
                    ellipsis={
                      <span>
                        ... <a href="/link/to/article">Read more</a>
                      </span>
                    }
                  >
                    {ReactHtmlParser(item.description)}
                  </Truncate>
                </Typography>
                <Grid container justify="space-around" alignItems="flex-start">
                  <Grid item xs={3} sm={3} md={3} lg={3} />
                  <Grid item xs={9} sm={9} md={9} lg={9}>
                    <Typography
                      gutterBottom
                      align="left"
                      variant="caption"
                      className={classes.eventDetailText}
                    >
                      text
                    </Typography>

                    <Typography
                      align="left"
                      variant="caption"
                      gutterBottom
                      className={classes.eventDetailText}
                    >
                      event text
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions className={classNames(classes.cardActions)}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant="caption"
                  className={classes.eventDetailText}
                >
                  asdfsadf
                </Typography>
              </div>
              <div>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  Join
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  render() {
    const { classes, episodes } = this.props;
    console.log('clas: ', classes);
    return (
      <div style={{ paddingTop: '64px' }}>
        <div className={classes.marginTop}>
          <Grid
            container
            spacing={40}
            justify="space-between"
            alignItems="center"
            wrap="wrap"
            className={classes.gridMargin}
          >
            {this.loadEpisodeList()}
          </Grid>
        </div>
      </div>
    );
  }
}

EpisodeGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodeGrid);
