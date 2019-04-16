import React from 'react';
// @material-ui/icons
import Check from '@material-ui/icons/Check';
import Warning from '@material-ui/icons/Warning';
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx';
import Clearfix from 'components/Clearfix/Clearfix.jsx';

class Notifications extends React.Component {
  render() {
    return (
      <div>
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="success"
          icon={Check}
        />
        <Clearfix />
      </div>
    );
  }
}

export default Notifications;
