import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import NewSuggestion from './NewSuggestion'


function StationInfo() {
    // const { id } = useParams()
    // console.log(id)

    // const [station, setStation] = useState('')
    // const [showSuggestion, setShowSuggetions] = useState('false')

    // useEffect(() => {
    //     axios
    //     .get(`/api/stations/${id}`)
    //     .then(response => {
    //         // console.log(response.data)
    //         setStation(response.data)
    //     })
    //     .catch(err => console.log(err))
    // },[])


    return (
        <div>
            {/* <aside>
                <h3>About the station you chose</h3>
            </aside>
            <article>
                <section>Map</section>
                <section>
                    <h3>Station name: {station?.name} </h3>
                    <p>Line: {station?.line}</p>
                    <p>District: {station?.district}</p>
                    <p>Current Capacity: </p>
                    <p>Load Factor: </p>
                    <div>suggestions</div>
                </section>
                <section>
                    {!showSuggestion? <NewSuggestion station={station}/> :  
                    <div>
                        <Link to='/'><p onClick={(e) => setShowSuggetions(!showSuggestion)}>New Suggestions</p></Link>
                        <Link to='/suggestions'><p>View Suggestions</p></Link> 
                    </div>}
                   
                </section>
            </article> */}
        </div>
    )
}

export default StationInfo;



