import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Review from './Review'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useParams } from 'react-router-dom';

function NewSuggestion(station) {
// console.log(station.station.name)
const name = station.station.name

const {id} = useParams()
console.log('this is the station id', id)

const [newLng, setNewLng] = useState()
const [newLat, setNewLat] = useState()
const [count, setCount] = useState(0)

const [coordinate, setCoordinate] = useState()
const [stands, setStands] = useState('Bicycle Rack')
const [amount, setAmount] = useState(1)
const [price, setPrice] = useState(40)
const [sum, setSum] = useState()

const [suggestionId, setSuggestionId] = useState()
const [showReview, setShowReview] = useState('false')
const [review, setReview] = useState()

const spots = []

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
                .setPopup(new mapboxgl.Popup({closeButton: true}).setText(`location ${count}`))
                .addTo(mapSugg)

            setNewLng(newLng.toFixed(3))
            setNewLat(newLat.toFixed(3))
            setCount((count) => count +1)

            spots.push({lng: newLng, lat: newLat})
            console.log(spots)
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
}, [stands, amount])

useEffect(() => {
    priceSum()
}, [stands, amount])

const storedToken = localStorage.getItem('authToken')

const scrollToRef = useRef()

const handleReview = (e) =>{
    e.preventDefault()
    console.log('object');
    const reqbody = { name, station: id, location : {latitude: newLat, longitude: newLng}, stands : {type: stands, amount: amount, sum: sum}}
    console.log('this is ', reqbody)
    
    // setReview(reqbody)
    // setShowReview(!showReview) 
    // scrollToRef.current.scrollIntoView()

    axios
    .post('/api/suggestions', reqbody)
    .then((response) => {
    console.log('this is from the frontend', response)
    setSuggestionId(response.data._id)
    })
}

//   console.log('new suggestion id', suggestionId)



//   const getSuggestion = () => {
//       axios
//       .get(`/suggestions/${suggestionId}`)
//       .then(response => console.log( response))
//   }


  // 1. get the coordinate of the marker
  // 1-a. get the stands type input
  // 2. according to the chosen stands type, calculate price sum
  // 3. display the sum
  // 4. get all the above information and then post it to the backend route

    return (
        <div >
            <article >
                <section>
               
                    <h4>you chose </h4>
                    <h2><strong>{name} / {station.station.line}</strong></h2>
                    <Link to='/start'><p>⬅︎ choose another station</p></Link>

                </section>
                <div>
                    <p>Mark on the map below where you'd like to create bicycle parking stations</p>
                </div>
                <div className="map-container" id="mapSugg"/>

                <section>
                     <form onSubmit={handleReview}>
                        <div id='sugg-form' >
                            <div id='location'>
                                <label for='location'>Location you chose </label>
 
                                <input type="text" value={count<1? ' ': newLng + ', ' + newLat} onChange={handleCoordinate}></input>
                            </div>
                            <div>
                                <label for='stand'>Choose types of bicycle stands</label>
                                <select onChange={handleStands} value={stands}>
                                    <option value="Bicycle Rack">Bicycle Rack</option>
                                    <option value="Vertical Stand">Vertical Stand</option>
                                    <option value="Two-Tier Rack">Two-Tier Rack</option>
                                </select>
                            </div>
                            <div>
                                <label for='amount'>Amount of stands </label>
                                <input type="number" value={amount} onChange={handleAmount} min='0'></input>
                            </div>
                        </div>
                        <div id='price'>
                                <p>Price: {price} € / 1p</p>
                                <h4>Sum: {sum} €</h4>
                                <button className='black-btn' type="submit">Submit your suggestion</button>
                        </div>
                    </form>   
                                 {/* <ul>
                                    <li>ABC</li>
                                    {spots.map((spot) => (<li>{spot.lng}, {spot.lat}</li>))}
                                </ul> */}
                    {/* <div >  
                        {!showReview? 
                            <div id='review'>
                                <p>Your suggestion will help us to create <strong>{review.stands.amount} {review.stands.type}</strong> near <strong>{review.name}</strong> station. Estimated cost is <strong>{sum}€</strong>.</p>
                                <button className='black-btn' type="submit">Submit</button>
                            </div> 
                                : 
                            <div >   
                            </div>
                        }
                    </div> */}
                      
                </section>         
                <Link to={`/suggestions/${suggestionId}`}><button className='long-btn'>view other suggestion</button></Link>        
            </article>
        </div>
    )
}

export default NewSuggestion;

