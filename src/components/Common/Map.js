import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


export default function Map(props) {
    const { data } = props
    const mapLng = data['cdp-mapLng']
    const mapLat = data['cdp-mapLat']
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(174.335);
    const [lat, setLat] = useState(-35.729);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: data['cdp-mapStyle'] || 'mapbox://styles/mapbox/streets-v11',
            center: [mapLng, mapLat],
            zoom: zoom,
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));  
    }); 
        
        new mapboxgl.Marker({color: 'black'})
            .setLngLat([mapLng, mapLat])
            .addTo(map.current);
      
  });

  return (  

      <div ref={mapContainer} style={{height:'57vh', width: '40vw'}} />
  );
}
