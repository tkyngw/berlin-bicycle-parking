import Navbar from "./Navbar";

function Stands() {
    return (
        <div>
            <Navbar />
            <aside>
                <h3>choose the types of bicycle stands</h3>
            </aside>
            <article>
                <section>
                    <h4>you chose</h4>
                    <h3>selected station & lines </h3><h2>Spot & location & size</h2>
                </section>
                <section>
                    <div>
                        <button>back</button>
                        <p>total budget: </p>
                    </div>
                    <div>
                        <img></img>
                        <p>type of the stand </p>
                        <p>price / piece </p>
                        <p>max amount </p>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Stands;

