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
    const [lng, setLng] = useState();
    const [lat, setLat] = useState();
    const [zoom, setZoom] = useState(10);

    const [suggestion, setSuggestion] = useState()

    // let initLng;
    // let initLat;

    useEffect(()=>{
        getStation()
    }, [])

    const getStation = () => {
        axios
        .get(`/api/stations/${id}`)
        .then(response => {
            setStation(response.data)
            setLng(response.data.longitude)
            setLat(response.data.latitude)
        })
        .catch(err => console.log(err))
    }

    console.log('initial', lng, lat)

    const getMap = () => {
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
            console.log('station', lng, lat)
            const marker = new mapboxgl.Marker({color: 'black'})
                .setLngLat([lng, lat])
                .addTo(map);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMap()
    },[station])


    const scrollToRef = useRef()

    const handleClicked = () => {
        setShowSuggetions(!showSuggestion) 
        scrollToRef.current.scrollIntoView()
    }

    return (
        <div className='contentpage'>
            <aside id="sidebar">
                <h2>2</h2>
                <h3>About the station you chose</h3>
            </aside>
            <article>
                <section className="station">
                <div id="station-info">
                    <div className='info-container'>
                        <div>
                            <h2><strong> {station?.name} </strong></h2>
                            <p>Line: {station?.line}</p>
                            <p>District: {station?.district}</p>
                            <p>Current Capacity: {station?.capacity}</p>
                        </div>
                    </div>
                    <div >
                    <div className="map-container" id="map"/>
                    </div>
                    <Link to='newSuggestion'><button className='long-btn'onClick={(e) => handleClicked()}>leave your suggestion on this station</button></Link>
                </div>
                <div ref={scrollToRef}>  
                    {!showSuggestion? 
                            <NewSuggestion station={station} lng={lng} lat={lat} id="newSuggestion" />
                            : 
                    
                        <div >   
                            {/* <Link to='/suggestions'><button>View Suggestions</button></Link>  */}
                        </div>
                    }
                </div>
                </section>
            </article>
        </div>
    )
}

export default StationInfo;

