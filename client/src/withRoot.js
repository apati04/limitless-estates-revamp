import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Component {...props} />
      </React.Fragment>
    );
  }
  return WithRoot;
}

export default withRoot;
