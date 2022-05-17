import StationList from '../components/StationList'
import { useState } from 'react'

function StartPage() {

    const [showStationList, setShowStationList] = useState('false')

    const handleClick = (e) => {
        setShowStationList(!showStationList)
    }

    return (
        <div>
            <aside>
                <h3>Choose a station to get started</h3>
            </aside>
            <article>
                <section>Map</section>
                <section>
                    <input type="text" placeholder="enter the name of a station to start" name="q"></input>
                    <button>Search</button>
                </section>
                <section>
                    {!showStationList?  
                    <div> <StationList /> </div> :
                    <p>or you can find stations by name <button onClick={handleClick}>here</button></p>
                     }  
                </section>
            </article>
        </div>
    )
}

export default StartPage;