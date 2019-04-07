import React, { Component } from 'react';
import GoogleMap from '../../../components/GoogleMap/GoogleMap';
class EventMap extends Component {
  render() {
    const { lat, lon: lng } = this.props.meetupLocation;
    let geo = { lat, lng };
    return (
      <GoogleMap
        height={'300px'}
        width={'100%'}
        centerMap={geo}
        mapLng={lng}
        mapLat={lat}
        zoomLevel={15}
        renderMapMarker
      />
    );
  }
}

export default EventMap;
