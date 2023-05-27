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
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken="pk.eyJ1IjoiY29tZXBpYyIsImEiOiJjbGJwaGhvbmcwNHJjM3BwOW1hZXFwY2E3In0.VCNQYlo9n0ZodfebeSNjQA"
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
