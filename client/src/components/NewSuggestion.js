import axios from 'axios';
import { Link } from 'react-router-dom'


function NewSuggestion(station) {
console.log(station.station.name)

  const getSpots = () => {
      axios
      .get(`/api/spots`)
  }
    return (
        <div >
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
                    <form>
                     <label>Choose types of bicycle stands</label>
                     <select>
                         <option value="bicycleRack">Bicycle Rack</option>
                         <option value="verticalStand">Vertical Stand</option>
                         <option value="twoTierRack">Two-Tier Rack</option>
                     </select>


                    </form>
                </section>
            
                
            </article>
        </div>
    )
}

export default NewSuggestion;