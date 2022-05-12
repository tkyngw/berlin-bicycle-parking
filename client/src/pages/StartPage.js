import Navbar from "../components/Navbar";

import { Link } from 'react-router-dom'

function StartPage() {
    return (
        <div>
            <Navbar />
            <aside>
                <h3>Choose a station to get started</h3>
            </aside>
            <article>
                <section>Map</section>
                <section>Search Bar</section>
                <p>or you can find stations by name <Link to='/startionlist'>here</Link></p>
            </article>
        </div>
    )
}

export default StartPage;