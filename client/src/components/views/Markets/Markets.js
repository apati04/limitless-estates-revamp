import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import columbus from './api/columbus_api';
import phoenix from './api/phoenix_api';
import tucson from './api/tucson_api';
import Main from './Main';
function Markets(props) {
  function loadPage() {
    const { id } = props.match.params;
    switch (id) {
      case 'phoenix-arizona':
        return <Main api={phoenix} />;
      case 'tucson-arizona':
        return <Main api={tucson} />;
      case 'columbus-ohio':
        return <Main api={columbus} />;
      default:
        return <div>redirect</div>;
    }
  }
  return <React.Fragment>{loadPage()}</React.Fragment>;
}

export default withRouter(Markets);
