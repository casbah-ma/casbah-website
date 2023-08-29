import Image from 'next/image';
import { MapWrapper } from './Map.styles';
import { Map, Marker } from 'react-map-gl';
import MarkerIcon from 'public/Subtract.png';
import { useState } from 'react';

const MapCard = ({ latitude, longitude, zoom = 14 }) => {
  // initial map state
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });

  return (
    <MapWrapper>
      <Map
        mapStyle="mapbox://styles/ysrbolles/clgpd5m7w00hy01qmff5q8t77"
        mapboxAccessToken="pk.eyJ1IjoieXNyYm9sbGVzIiwiYSI6ImNsNW03dm9qcjBienAzY3F2M2Q0cTFnbWMifQ.gFNmLudp0JkoMZj7dRQPKw"
        width="100%"
        height="100%"
        initialViewState={viewport}
      >
        <Marker latitude={latitude} longitude={longitude}>
          <Image src={MarkerIcon} alt="casbah" width="60" height="72" />
        </Marker>
      </Map>
    </MapWrapper>
  );
};

export default MapCard;
