import { Link } from 'react-router-dom'

function Navbar(){

    return (
        <div className="navbar">
            <nav>
                <Link to='/'>
                    <h3>Berlin Bicycle Station</h3>
                </Link>
                <ul>
                    <Link to='/about'>
                        <li>about the project</li>
                    </Link>
                    <Link to='/start'>
                        <li>participate</li> 
                    </Link>
                    <Link to='/suggestion'>
                        <li>see the suggestions</li>    
                    </Link>
                    <Link to='/contact'> 
                         <li>contact us</li> 
                    </Link>
                    <Link to='/signup'>
                        <li>Sign-up / Log-in</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )


}

export default Navbar;