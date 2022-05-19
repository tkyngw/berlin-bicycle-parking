import {Link} from 'react-router-dom'

function SuggestionPage() {
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
                            <tr>
                                <td width={280}>station name</td>
                                <td width={140}>line</td>
                                <td>amount of stands</td>
                                <td>number of suggestions</td>
                                <td><button>view</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </article>
        </div>
    )
}

export default SuggestionPage;

