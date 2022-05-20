import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import NewSuggestion from './NewSuggestion'
import circle from '../images/circle.png'
import blackcircle from '../images/black-circle.png'

import React, { useRef } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {Link} from 'react-scroll'

function StationInfo() {

    const { id } = useParams()
    // console.log(id)

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
            console.log(response.data)
            setStation(response.data)
            setLng(response.data.longitude)
            setLat(response.data.latitude)
        })
        .catch(err => console.log(err))
        
    },[])
  
    console.log(lng, lat)

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
    }, [lng, lat])

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
                        <div id="station-info">
                            <div>
                                <h3>Station name: <strong>{station?.name}</strong> </h3><br />
                                <h5>Line:  <strong>{station?.line}</strong></h5>
                                <h5>District:  <strong>{station?.district}</strong></h5>
                                <h5>Current Capacity:  <strong>{station?.capacity}</strong></h5>
                            </div>
                        {/* <div className='sugg'>
                            <img src={blackcircle} alt="circle" id="blackcircle"></img>
                          
                            <div id='suggnumber'>  <h1>{count}</h1> suggestions</div>
                        </div> */}
                            <div id="station-button" >
                                <Link to='test' spy={true} smooth={true}><button>Leave new Suggestions</button></Link>
                            </div>
                        </div>
                </section>
                <section className="station-2">
                    {/* {!showSuggestion?  */}

                        <div id='test'>
                        <NewSuggestion station={station} lng={lng} lat={lat} />
                        </div>
                        {/* :  */}
                  
                        <div id="station-button">                        
                            {/* <Link to='test' spy={true} smooth={true}><button onClick={(e) => setShowSuggetions(!showSuggestion)}>New Suggestions</button></Link> */}
                          
                            {/* <Link to='/suggestions'><button>View Suggestions</button></Link>  */}
                        </div>
                </section>
            </article>
        </div>
    )
}

export default StationInfo;

