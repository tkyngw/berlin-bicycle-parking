import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import NewSuggestion from './NewSuggestion'
import circle from '../images/circle.png'
import blackcircle from '../images/black-circle.png'

import React, { useRef } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {Link} from 'react-scroll'

// import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

// mapboxgl.accessToken = 'pk.eyJ1IjoidGt5bmd3IiwiYSI6ImNsMzhmOGE1ZjAwZXkzZW1meDI4aXU1YmcifQ.g68XCShXJROipd_fWdl3Pg';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

function StationInfo() {

    const { id } = useParams()
    console.log(id)

    const [station, setStation] = useState('')
    const [showSuggestion, setShowSuggetions] = useState('false')

    // const mapContainer = useRef(null);
    // const map = useRef(null);
    const [lng, setLng] = useState(13.40);
    const [lat, setLat] = useState(52.52);
    const [zoom, setZoom] = useState(10);

    const [suggestion, setSuggestion] = useState()
 
    let count = 0

    useEffect(() => {
        axios
        .get(`/api/stations/${id}`)
        .then(response => {
            // console.log(response.data)
            setStation(response.data)
            setLng(response.data.longitude)
            setLat(response.data.latitude)
        })
        .catch(err => console.log(err))
        
    },[])

    // console.log(station)
    // console.log(lng)
    // console.log(lat)

    // useEffect(() => {
    //     axios
    //     .get('/api/suggestions')
    //     .then(response => {
    //         console.log(response.data)
    //         response.data.map(suggestion => suggestion.station === id ? count ++ : count)
    //     })
    //     .catch(err => console.log(err))
    // },[])

    // const suggestionCounter = () => {
    //     suggestion.map(sugg => sugg.station === id? count ++ : count)
    // }

    // useEffect(() => {
    //     setCount(count)
    // }, [suggestion])

    // console.log(count)

    useEffect(()=>{
        axios
        .get('https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js')
        .then(response => {
            // console.log(response)
            mapboxgl.accessToken = 'pk.eyJ1IjoidGt5bmd3IiwiYSI6ImNsMzhmOGE1ZjAwZXkzZW1meDI4aXU1YmcifQ.g68XCShXJROipd_fWdl3Pg';
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/tkyngw/cl3bro7yd000c15psxzf1aonu', // style URL
                center: [lng, lat], // starting position [lng, lat]
                zoom: 14 // starting zoom
            });
            const marker = new mapboxgl.Marker({color: 'black'})
                .setLngLat([lng, lat])
                .addTo(map);
        })
        .catch(err => console.log(err))
    }, [])

    const handleClicked = () => {
        setShowSuggetions(!showSuggestion) 
    }

    return (
        <div className='contentpage'>
            <aside id="sidebar">
                <h3>About the station you chose</h3>
                <h2>2</h2>
                <img src={circle} alt="circle" width={100}></img>
            </aside>
            <article>
                <section className="station">
                    <div >
                        <div className="map-container" id="map"/>
                    </div>
                    <div className='info-container'>
                        <div id="station-info">
                            <h3>Station name: {station?.name} </h3>
                            <p>Line: {station?.line}</p>
                            <p>District: {station?.district}</p>
                            <p>Current Capacity: {station?.capacity}</p>
                        </div>
                        {/* <div className='sugg'>
                            <img src={blackcircle} alt="circle" id="blackcircle"></img>
                          
                            <div id='suggnumber'>  <h1>{count}</h1> suggestions</div>
                        </div> */}
                    </div>
                    {!showSuggestion? 
                            <NewSuggestion station={station} lng={lng} lat={lat} id="newSuggestion" />
                            : 
                    
                        <div>   
                            <Link to='newSuggestion'><button onClick={(e) => setShowSuggetions(!showSuggestion)}>New Suggestions</button></Link>
                            {/* <Link to='/suggestions'><button>View Suggestions</button></Link>  */}
                        </div>}
                   

                </section>
            </article>
        </div>
    )
}

export default StationInfo;

