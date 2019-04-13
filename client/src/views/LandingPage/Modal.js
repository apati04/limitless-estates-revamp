import React from 'react';
import Button from 'components/CustomButtons/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactPlayer from 'react-player';
import withStyles from '@material-ui/core/styles/withStyles';
import modalStyle from 'assets/jss/material-kit-react/modalStyle';

class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button color="danger" size="lg" onClick={this.handleClickOpen}>
          <i className="fas fa-play" />
          Watch Video
        </Button>
        <Dialog
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          aria-labelledby="form-dialog-title"
          aria-describedby="modal-slide-description"
        >
          <div
            style={{
              display: 'flex',
              padding: '0rem',
              borderRadius: 0,
              objectFit: 'contain'
            }}
          >
            <ReactPlayer
              style={{ width: 'auto', objectFit: 'contain' }}
              url="https://apax714.wistia.com/medias/pueh6irs0z"
              playing
              wrapper="object"
            />
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default withStyles(modalStyle)(FormDialog);
