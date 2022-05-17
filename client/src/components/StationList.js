import React from 'react';
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Suggestion from './NewSuggestion';
import StationInfo from './StationInfo'

function StationList() {
    const [stations, setStations] = useState([])

    const getAllStations = () => {
        axios
        .get(`/api/stations`)
        .then(response => {
            // console.log(response.data)
            setStations(response.data)
        })
        .catch(err => {console.log(err)
        })
    }

    useEffect(() => {
        getAllStations()
    }, [])

    return (
        <div className='stationList'>
            <aside>
                <h3>Choose a station to get started</h3>
            </aside>
            <article>
                <h3>Stations by name</h3>
                {stations.map(station =>
                   // this name should link to the station info
                    <Link to={`/stations/${station._id}`}><p key={station._id}>{station.name}</p>
                    </Link>
                )}
            </article>
        </div>
    )
}

export default StationList;
