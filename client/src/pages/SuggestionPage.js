import {Link} from 'react-router-dom'

function SuggestionPage() {
    return (
        <div className="contentpage">
            <aside id='sidebar'>
                <h3><Link to='/start'>share us your idea now!</Link></h3>
            </aside>
            <article className="station">
                <section>
                    <h2>Suggestions from others</h2>
                </section>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <td>Station</td>
                                <td>Line</td>
                                <td>Stands</td>
                                <td>Suggestions</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>station name</td>
                                <td>line</td>
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

