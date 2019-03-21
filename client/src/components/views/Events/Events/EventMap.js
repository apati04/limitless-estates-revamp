import React, { Component } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
class EventMap extends Component {
  render() {
    let mapkey = 'AIzaSyAzFLuNuk1zRYOPag2-dNnVqw8I-R2qnjE';
    const {
      id,
      lat,
      lon,
      name,
      address_1,
      city,
      state
    } = this.props.meetupLocation;
    return (
      <div
        style={{ width: '100%', height: '300px' }}
        className="mb-2 border border-light"
      >
        <GoogleMap
          centerMap={{ lat, lng: lon }}
          mapLng={lon}
          mapLat={lat}
          renderMapMarker
          zoomLevel={15}
        />
      </div>
    );
  }
}

export default EventMap;
