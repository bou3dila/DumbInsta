import React, { useRef } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = props => {
const mapRef = useRef();

const MapBox = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYm91M2RpbGEiLCJhIjoiY2s5NDN3dTFlMDFxdTNlc2wyMTJlY29nNiJ9.-VYqxai8Dty695BheyajMw'
  });
  
  
    return <div id="mapcontainer" style={props.style}>
        <MapBox className={`map ${props.className}`}
         center={[props.coordinates.lng, props.coordinates.lat]}
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '50vh',
    width: '100%'
  }}
  zoom={[10]}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[props.coordinates.lng, props.coordinates.lat]} />
  </Layer>
</MapBox>
    </div>
}

export default Map;