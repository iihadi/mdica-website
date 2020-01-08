import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const mapStyles = {
  width: '75%',
  height: '75%'
};

export class LocateUs extends Component {
  render() {
    return (
      <div>
      <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 51.728859,
        long: 0.685890
      }}
      >
      <Marker position={{lat: 52, long: 0.68}}/>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'soonTM'
})(LocateUs);
