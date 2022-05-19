import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


function NewSuggestion(station) {
console.log(station.station.name)

const [lng2, setLng2] = useState()
const [lat2, setLat2] = useState()
const [count, setCount] = useState(0)

useEffect(()=>{
    axios
    .get('https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js')
    .then(response => {
        // console.log(response)
        mapboxgl.accessToken = 'pk.eyJ1IjoidGt5bmd3IiwiYSI6ImNsMzhmOGE1ZjAwZXkzZW1meDI4aXU1YmcifQ.g68XCShXJROipd_fWdl3Pg';
        const map = new mapboxgl.Map({
             container: 'map2', // container ID
             style: 'mapbox://styles/tkyngw/cl3bro7yd000c15psxzf1aonu', // style URL
             center: [station.lng, station.lat], // starting position [lng, lat]
             zoom: 14 // starting zoom
             });
        
         map.on('click',(e) => {
            console.log(`A click event has occurred at ${e.lngLat}`);
            // console.log(e.lngLat.lng)
            // console.log(e.lngLat.lat)
            let newLng = e.lngLat.lng
            let newLat = e.lngLat.lat
   
            // the way to create a new marker
            const newMarker = new mapboxgl.Marker({color: 'red', anchor: 'center'})
                .setLngLat([newLng, newLat])
                .addTo(map)

            setLng2(newLng.toFixed(3))
            setLat2(newLat.toFixed(3))
            setCount((count) => count +1)
            
            });
    })
    .catch(err => console.log(err))
},[])

console.log(lng2)
console.log(lat2)

  const getSpots = () => {
      axios
      .get(`/api/spots`)
  }

  const handleSubmit = () =>{

  }

    return (
        <div >
            <article>
                <section>
               
                    <h4>you chose </h4>
                    <h2>{station.station.name} / {station.station.line}</h2>
                    <Link to='/start'><p>choose another station</p></Link>

                </section>
                      <div className="map-container" id="map2"/>
                <section>
                    <form onSubmit={handleSubmit}>
                     <p>Choose types of bicycle stands</p>
                     <label>Location: {count}</label><br></br>
                     <input type="text" value={`${lng2}, ${lat2}`}></input>
                     <select>
                         <option value="bicycleRack">Bicycle Rack</option>
                         <option value="verticalStand">Vertical Stand</option>
                         <option value="twoTierRack">Two-Tier Rack</option>
                     </select>
                     <button type="submit">Submit</button>

                    </form>
                </section>
            
                
            </article>
        </div>
    )
}

export default NewSuggestion;

