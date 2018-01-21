import _ from "lodash";
import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={5} defaultCenter={{ lat: 48.21, lng: 11.62 }}>
    <Marker position={{ lat: 48.21, lng: 11.62 }} />
  </GoogleMap>
));

const enhance = _.identity;

class Map extends Component {
  render() {
    return (
      <div className = "cavas">
      <MyMapComponent />
      </div>
    )
  };
}

export default Map;
