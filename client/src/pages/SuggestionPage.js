import Navbar from "../components/Navbar";

function SuggestionPage() {
    return (
        <div>
            <Navbar />
            <aside>
                <h3>share us your idea now! this links to new suggestion</h3>
            </aside>
            <article>
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

