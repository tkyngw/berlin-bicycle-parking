
import StationList from '../components/StationList'
import { useState, useEffect, useRef } from 'react'

import Map from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidGt5bmd3IiwiYSI6ImNsMzhmOGE1ZjAwZXkzZW1meDI4aXU1YmcifQ.g68XCShXJROipd_fWdl3Pg';


function StartPage() {

    const [showStationList, setShowStationList] = useState('false')

    const handleClick = (e) => {
        setShowStationList(!showStationList)
    }

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(13.40);
    const [lat, setLat] = useState(52.52);
    const [zoom, setZoom] = useState(9);
  
    useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
      })
      var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        })
    geocoder.addTo(mapContainer.current);  

    }, []);

    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on('move', () => {
    //       setLng(map.current.getCenter().lng.toFixed(4));
    //       setLat(map.current.getCenter().lat.toFixed(4));
    //       setZoom(map.current.getZoom().toFixed(2));
    //     });
    //   });

    return (
        <div>
            <aside>
                <h3>Choose a station to get started</h3>
            </aside>
            <article>
                <section>
                <div>
                {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div> */}
                  <div ref={mapContainer} className="map-container"/>
                  {/* <div ref={map} id='map'/> */}
                </div>
                </section>
                <section>
                    {/* <input type="text" placeholder="enter the name of a station to start" name="q"></input>
                    <button>Search</button> */}
                </section>
                <section>
                    {!showStationList?  
                    <div> <StationList /> </div> :
                    <p>or you can find stations by name <button onClick={handleClick}>here</button></p>
                     }  
                </section>
            </article>
        </div>
    )
}

export default StartPage;