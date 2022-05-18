import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link} from 'react-router-dom'
import NewSuggestion from './NewSuggestion'
import circle from '../images/circle.png'
import blackcircle from '../images/black-circle.png'

function StationInfo() {

    const { id } = useParams()
    // console.log(id)

    const [station, setStation] = useState('')
    const [showSuggestion, setShowSuggetions] = useState('false')

    useEffect(() => {
        axios
        .get(`/api/stations/${id}`)
        .then(response => {
            // console.log(response.data)
            setStation(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleClicked = () => {
        setShowSuggetions(!showSuggestion) 
    }

    return (
        <div className='contentpage'>
            <aside id="sidebar">
                <h3>About the station you chose</h3>
                <img src={circle} alt="circle" width={100}></img>
            </aside>
            <article>
                <section className="station">
                <div>map</div>
                <div>
                    <h3>Station name: {station?.name} </h3>
                    <p>Line: {station?.line}</p>
                    <p>District: {station?.district}</p>
                    <p>Current Capacity: </p>
                    <p>Load Factor: </p>
                    <div className='sugg'>
                        <img src={blackcircle} alt="circle" id="blackcircle"></img>
                        <div id='suggnumber'>suggestions</div>
                    </div>
                    {!showSuggestion? 
              
                        <NewSuggestion station={station}/>
                         : 
                   
                    <div>   
                        <Link to=''><button onClick={(e) => setShowSuggetions(!showSuggestion)}>New Suggestions</button></Link>
                        <Link to='/suggestions'><button>View Suggestions</button></Link> 
                    </div>}
                </div>
                </section>
            </article>
        </div>
    )
}

export default StationInfo;

