import { Link } from 'react-router-dom'

function NewSuggestion(station) {
console.log(station.station.name)

    return (
        <div>
            <article>
                <section>
                    <h4>you chose </h4>
                    <h2>{station.station.name} / {station.station.line}</h2>
                    <Link to='/start'><p>choose another station</p></Link>
                </section>
                <section>
                    <p>here comes the map</p>
                </section>
                <section>
             
                </section>
            
                
            </article>
        </div>
    )
}

export default NewSuggestion;