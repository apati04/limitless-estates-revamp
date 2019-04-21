import React from 'react';
import Button from 'components/CustomButtons/Button';
import classNames from 'classnames';

import Dialog from '@material-ui/core/Dialog';

import ReactPlayer from 'react-player';
import withStyles from '@material-ui/core/styles/withStyles';
import modalStyle from 'assets/jss/material-kit-react/modalStyle';
const styles = theme => ({
  ...modalStyle,
  playerWrapper: {
    postiion: 'relative',
    paddingTop: '56.25%'
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  mobile: {
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  }
});
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
          className={classNames(classes.mobile, classes.modal)}
          open={this.state.open}
          onClose={this.handleClose}
          classes={{
            root: classes.center,
            paper: classNames(classes.modal, classes.mobile)
          }}
          aria-labelledby="form-dialog-title"
          aria-describedby="modal-slide-description"
        >
          <div className={classes.playerWrapper}>
            <ReactPlayer
              className={classes.reactPlayer}
              url="https://apax714.wistia.com/medias/pueh6irs0z"
              playing
              width="100%"
              height="100%"
            />
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(FormDialog);
