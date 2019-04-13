import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from 'components/CustomButtons/Button.jsx';
import ReactPlayer from 'react-player';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Dialog from '@material-ui/core/Dialog';
import Fade from '@material-ui/core/Fade';
import modalStyle from 'assets/jss/material-kit-react/modalStyle';
import Limitless from './wistia';
import DialogContent from '@material-ui/core/DialogContent';
function Transition(props) {
  return <Fade in {...props} />;
}
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
  ...modalStyle,
  root: {
    ...modalStyle,
    padding: 0,
    width: '100%'
  }
});

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes, url } = this.props;
    return (
      <React.Fragment>
        <Button
          color="danger"
          size="lg"
          onClick={() => this.handleClickOpen('modal')}
        >
          <i className="fas fa-play" />
          Watch video
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose('modal')}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          {/* <Limitless wistiaSrc={url} /> */}
          <div style={{ height: '400', width: 'auto' }}>
            <ReactPlayer url={url} height="360px" width="640" />
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleModal);
