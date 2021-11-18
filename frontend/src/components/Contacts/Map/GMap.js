import React, { memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styles from './GMap.module.scss';


export const GMap = memo(() => {
  const center = {
    lat: 55.7735040997086,
    lng: 37.5394333561392
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDxh2WROdBisMFEC3Hzc7bJyFJdjTwvVak",
    language: "Ru"
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName={styles.map}
      center={center}
      zoom={17}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : <></>
})
