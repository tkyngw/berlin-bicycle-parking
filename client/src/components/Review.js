import React from 'react'
import axios from "axios";
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Review() {

    const {id} = useParams()

    const [review, setReview] = useState()

    useEffect(() => {
        axios
        .get(`/api/suggestions/${id}`)
        .then(response => {
            console.log('data retreieved', response.data)
            setReview(response.data)
        })
        .catch(err => (err))
    },[])


    return (
        <div className='contentpage'>
            <aside id='sidebar'>
                <h3>review your suggestion</h3>
            </aside>
            <article>
                <section className="station">
                    <p>your suggestion will help us to create <strong>{review.stands.amount} {review.stands.type}</strong> on <strong>{review.location.latitude}, {review.location.longitude}</strong>.</p>
                    <button><Link to='/suggestions'>view other suggestions</Link></button>
                </section>
                
            </article>
        </div>
    )
}

export default Review;

