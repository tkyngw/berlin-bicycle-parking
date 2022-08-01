import { Link } from 'react-router-dom';

import Arrow from '../images/downarrow.png' 

function HomePage(){
    return (
        <div className='homepage'>
            <article className='opacity'>
                <h1>Berlin needs more bicycle parking spaces and <i>you</i> know where to create them</h1>
                <Link to='/start'>
                    <img src={Arrow} alt="downwards arrow" height={50} width={50} id="arrow" onClick={() => window.location.replace("/#start")}></img>
                </Link>
            </article>

        </div>
    )

}

export default HomePage;