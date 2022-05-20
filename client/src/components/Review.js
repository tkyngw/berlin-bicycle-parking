import React from 'react'
import axios from "axios";
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Review() {

    const {id} = useParams()
    console.log(id)

    const [location, setLocation] = useState()
    const [stands, setStands] = useState()
    const [station, setStation] = useState()

    const getSuggestion = () => {
        axios
        .get(`/api/suggestions/${id}`)
        .then(response => {
            console.log('data retreieved', response.data)
                const { location, stands, name } = response.data
                setLocation(location)
                setStation(name)
                setStands(stands)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
       getSuggestion()
    },[])

    // console.log(stands.type)

    return (
        <div >
            <article className="station">
                <section>
                    <h4>Summary of your suggestion</h4>
                </section>
                <section >
                    {/* <h5>{station}</h5>
                    <p>{location.latitude}, {location.longitude}</p>
                    <p>{stands.type}</p>
                    <p>{stands.amount}</p>
                    <p>{stands.sum}</p> */}
                    <p>your suggestion will help us create - amout of racks - on - location -.</p>
                </section>
                <button ><Link to='/suggestions'>view other suggestions</Link></button>
            </article>
        </div>
    )
}

export default Review;

