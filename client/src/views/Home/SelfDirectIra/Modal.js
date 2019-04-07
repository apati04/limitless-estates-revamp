import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from 'components/CustomButtons/Button.js';
import ReactPlayer from 'react-player';
import PlayArrow from '@material-ui/icons/PlayArrow';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 20;
  const left = 23;

  return {
    top: `${top}%`,
    left: `${left}%`
  };
}

const styles = theme => ({
  paper: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '858px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none'
    }
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ textAlign: 'center' }}>
        <Button variant="fab" color="secondary" onClick={this.handleOpen}>
          <PlayArrow style={{ fontSize: '2rem' }} />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          className={classes.modal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <ReactPlayer
              url="https://apax714.wistia.com/medias/mtdamm7u8i"
              playing
              width="auto"
            />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleModal);
