import axios from 'axios';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

function SuggestionPage() {

    const [suggestions, setSuggestions] = useState([])

    const getAllSuggestions = () => {
        axios
        .get(`/api/suggestions`)
        .then(response => {
            // console.log(response.data)
            setSuggestions(response.data)
        })
        .catch(err => {console.log(err)
        })
    }

    useEffect(() => {
        getAllSuggestions()
    }, [])

    console.log(suggestions)

   
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
                                <th scope="col">Line</th>
                                <th scope="col">Stands</th>
                                <th scope="col">Suggestions</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {suggestions.map(suggestion => 
                            <tr>
                                <td width={280}>{suggestion.name}</td>
                                <td width={140}></td>
                                <td>{suggestion.stands.amount}</td>
                                <td>number of suggestions</td>
                                {/* <td><Link to={`/stations/${station._id}`}><button>view</button></Link></td> */}
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

