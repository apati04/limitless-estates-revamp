import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Lightbox from 'lightbox-react';
import ReactPlayer from 'react-player';
import Button from 'components/CustomButtons/Button';
import Grid from '@material-ui/core/Grid';
const imageThumbnail =
  'https://embedwistia-a.akamaihd.net/deliveries/58e321ff4025d8d517c815b85ac32c819184b742.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=54bbffe0';
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class LightboxPlayer extends Component {
  state = { isOpen: false };
  openLightbox = () => {
    this.setState({
      isOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { classes, url } = this.props;
    const { isOpen } = this.state;
    const imageThumbnail =
      'https://embedwistia-a.akamaihd.net/deliveries/58e321ff4025d8d517c815b85ac32c819184b742.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=54bbffe0';
    let lightbox;
    if (isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={url}
          onCloseRequest={this.closeLightbox}
          mainSrcThumbnail={imageThumbnail}
          reactModalStyle={{
            display: 'flex',
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100
          }}
          enableZoom={false}
        />
      );
    }

    return (
      <div className={classes.root}>
        <Button variant="contained" onClick={this.openLightbox}>
          open lightbox
        </Button>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={10}>
            {lightbox}
          </Grid>
        </Grid>
      </div>
    );
  }
}

LightboxPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LightboxPlayer);
