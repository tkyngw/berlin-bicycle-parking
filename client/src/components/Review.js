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
    },[])

    return (
        <div>
            <aside id='sidebar'>
                <h3>review your suggestion</h3>
            </aside>
            <article>
                <section>
                    <h4>Summary of your suggestion</h4>
                </section>
                <section>
                     <div>
                        <button>back</button>
                        <p>expense /  total budget: </p>
                    </div>
                </section>
                <section>
                    <p>Spot component</p>
                    <p>Stand component</p>
                    <p>your suggestion will help us create - amout of racks - on - location -.</p>
                </section>
                <button><Link to='/suggestions'>view other suggestions</Link></button>
            </article>
        </div>
    )
}

export default Review;

