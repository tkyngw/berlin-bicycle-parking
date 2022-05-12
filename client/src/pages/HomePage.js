import { Link } from 'react-router-dom';

import Navbar from "../components/Navbar";
import Arrow from '../images/downarrow.png'

function HomePage(){
    return (
        <div>
            <header>
                <Navbar />  
            </header>
            <article>
                <h1>Berlin needs more bicycle parking spaces and <i>you</i> know where to create them</h1>
                <p>Let's get started</p>
                <Link to='/start'>
                    <img src={Arrow} alt="downwards arrow" height={50}></img>
                </Link>
            </article>

        </div>
    )

}

export default HomePage;