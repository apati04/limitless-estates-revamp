import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 240,
    height: 240
  }
};

function Kyle(props) {
  const { classes } = props;
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-around">
          <div className="col-auto">
            <Avatar
              src="https://i.imgur.com/qC2iaYa.jpg?2"
              className={classes.bigAvatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Kyle);
