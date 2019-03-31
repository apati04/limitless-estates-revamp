import React, { Fragment, Component } from 'react';

export default class MapMarker extends Component {
  render() {
    return (
      <Fragment>
        {this.props.renderMapMarker ? (
          <div
            style={{
              padding: '0.9375rem 0.625rem',
              display: 'inline-flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '100%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <span>
              <img
                alt="map-marker"
                src="https://i.imgur.com/llqM3iT.png"
                width="3rem"
              />
            </span>
          </div>
        ) : (
          <div />
        )}
      </Fragment>
    );
  }
}
/*   <span style={{ maxWidth: '75px' }}>
<img src="https://i.imgur.com/Uh6BVn0.png" className="img-fluid" />
</span> */
