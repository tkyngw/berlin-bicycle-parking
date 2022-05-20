import axios from 'axios';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import StationInfo from '../components/StationInfo';

function SuggestionPage() {

    const [suggestions, setSuggestions] = useState([])
 
    useEffect(() => {
        axios
        .get(`/api/suggestions`)
        .then(response => {
            console.log(response.data)
            setSuggestions(response.data)
        })
        .catch(err => {console.log(err)
        })
    }, [])

    let count = 0
    suggestions.map((suggestion) => { 
       if(suggestion.name === 'Alexanderplatz' ){
        count ++
       }
    })

    console.log(count)
    
    return (
        <div className="suggestionpage">
            <aside id='sidebar'>
                <div id='frame'>
                <h3>share us your idea now!</h3>
                <Link to='/start'>go to suggestion</Link>
                </div>
            </aside>
            <article className="suggestion">
                <section>
                    <h2>Suggestions from others</h2>
                </section>
                <section>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">Station</th>
                                {/* <th scope="col">Line</th> */}
                                <th scope="col">Stands</th>
                                <th scope="col">Suggestions</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {suggestions.map(suggestion => 
                            <tr key={suggestion._id}>
                                <td width={280}>{suggestion.name}</td>
                                {/* <td width={140}></td> */}
                                <td>{suggestion.stands.amount}</td>
                                <td></td>
                                <td><Link to={`/suggestions/${suggestion._id}`}><button>view</button></Link></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </article>
        </div>
    )
}

export default SuggestionPage;

