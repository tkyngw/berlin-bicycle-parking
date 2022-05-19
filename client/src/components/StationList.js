
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Suggestion from './NewSuggestion';
import StationInfo from './StationInfo'

function StationList() {
    const [stations, setStations] = useState([])
    const [name, setName] = useState([])


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

    // const handleSubmit = e => {
	// 	e.preventDefault()
	// 	const requestBody = { name }
	// 	axios.post('/api/stations/', requestBody)
	// 		.then(response => {
	// 			// redirect to login
	// 		})
	// }

    // const getTheName = (e) => {
    //     setName(e.target.value)
    // }

    let filtered = stations.sort(function (a,b) {
        const nameA = a.name.toUpperCase()
        const nameB =  b.name.toUpperCase()
        if (nameA > nameB){
            return 1
        } if (nameA < nameB) {
            return -1
        }

    })

    return (
        <div className='stationList'>
            <article>
                <h3>Stations by name</h3>
                {/* <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={getTheName}></input>
                    <button type="submit">submit</button>
                </form> */}
                <div>
                {filtered.map(station =>
                   // this name should link to the station info
                    <Link to={`/stations/${station._id}`}><p key={station._id}>{station.name}</p>
                    </Link>
                )}
                </div>
            </article>
        </div>
    )
}

export default StationList;
