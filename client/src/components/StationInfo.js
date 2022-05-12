import Navbar from "./Navbar";

function StationInfo() {
    return (
        <div>
            <Navbar />
            <aside>
                <h3>About the station you chose</h3>
            </aside>
            <article>
                <section>Map</section>
                <section>
                    <h3>Station name</h3>
                    <p>Line: </p>
                    <p>District: </p>
                    <p>Current Capacity: </p>
                    <p>Load Factor: </p>
                    <div>suggestions</div>
                </section>
                <section>
                    <button>Submit new Suggestions</button>
                    <button>View Suggestions</button>
                </section>
            </article>
        </div>
    )
}

export default StationInfo;

