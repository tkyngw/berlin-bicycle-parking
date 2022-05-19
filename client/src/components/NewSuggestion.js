import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useParams } from 'react-router-dom';

function NewSuggestion(station) {
console.log(station.station.name)
const name = station.station.name
const {stationId} = useParams()
console.log(stationId)

const [newLng, setNewLng] = useState()
const [newLat, setNewLat] = useState()
const [count, setCount] = useState(0)

const [coordinate, setCoordinate] = useState()
const [stands, setStands] = useState('Bicycle Rack')
const [amount, setAmount] = useState(1)
const [price, setPrice] = useState(40)
const [sum, setSum] = useState()

useEffect(()=>{
    axios
    .get('https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js')
    .then(response => {
        // console.log(response)
        mapboxgl.accessToken = 'pk.eyJ1IjoidGt5bmd3IiwiYSI6ImNsMzhmOGE1ZjAwZXkzZW1meDI4aXU1YmcifQ.g68XCShXJROipd_fWdl3Pg';
        const mapSugg = new mapboxgl.Map({
             container: 'mapSugg', // container ID
             style: 'mapbox://styles/tkyngw/cl3bro7yd000c15psxzf1aonu', // style URL
             center: [station.lng, station.lat], // starting position [lng, lat]
             zoom: 14 // starting zoom
             });
             
        const marker = new mapboxgl.Marker({color: 'black'})
             .setLngLat([station.lng, station.lat])
             .addTo(mapSugg);

         mapSugg.on('click',(e) => {
            console.log(`A click event has occurred at ${e.lngLat}`);
            // console.log(e.lngLat.lng)
            // console.log(e.lngLat.lat)
            let newLng = e.lngLat.lng
            let newLat = e.lngLat.lat
   
            // the way to create a new marker
            const newMarker = new mapboxgl.Marker({color: 'red', anchor: 'center'})
                .setLngLat([newLng, newLat])
                .addTo(mapSugg)

            setNewLng(newLng.toFixed(3))
            setNewLat(newLat.toFixed(3))
            setCount((count) => count +1)
            
            });
    })
    .catch(err => console.log(err))
},[])

// console.log(lng2)
// console.log(lat2)
function unitPrice () {   
    // console.log(stands);  
    if (stands === 'Bicycle Rack') {
        setPrice(40)
    
    } if (stands === 'Vertical Stand') {
        setPrice(400)
    
    } if (stands === 'Two-Tier Rack') {
        setPrice(1000)
    
    }
}

function priceSum() {
        setSum (price * amount ) 
}

const handleCoordinate = (e) => setCoordinate(e.target.value)
const handleStands = (e) => setStands(e.target.value) 
const handleAmount = (e) => setAmount(e.target.value)

useEffect(() => {
    unitPrice() 
    priceSum()
}, [stands, amount])


  const handleSubmit = (e) =>{
      e.preventDefault()
      const reqbody = { stationId, location : {latitude: newLat, longitude: newLng}, stands : {type: stands, amount: amount, sum: sum}}
      console.log(reqbody)

      axios
      .post('/api/suggestions', reqbody)
      .then()
  }




  // 1. get the coordinate of the marker
  // 1-a. get the stands type input
  // 2. according to the chosen stands type, calculate price sum
  // 3. display the sum
  // 4. get all the above information and then post it to the backend route

    return (
        <div >
            <article>
                <section>
               
                    <h4>you chose </h4>
                    <h2>{name} / {station.station.line}</h2>
                    <Link to='/start'><p>choose another station</p></Link>

                </section>
                      <div className="map-container" id="mapSugg"/>
                <section>
                     <form onSubmit={handleSubmit}>
                        <label>Location {count} : </label>
                        <input type="text" value={newLng + ', ' + newLat} onChange={handleCoordinate}></input>

                        <label>Choose types of bicycle stands</label>
                        <select onChange={handleStands} value={stands}>
                            <option value="Bicycle Rack">Bicycle Rack</option>
                            <option value="Vertical Stand">Vertical Stand</option>
                            <option value="Two-Tier Rack">Two-Tier Rack</option>
                        </select>

                        <label>Amount of stands </label>
                        <input type="number" value={amount} onChange={handleAmount}></input>
                        <button type="submit">Submit</button>
                    </form>
                    <h5>Price: {price} € / 1p</h5>
                    <h4>Sum: {sum} €</h4>
                </section>                
            </article>
        </div>
    )
}

export default NewSuggestion;

