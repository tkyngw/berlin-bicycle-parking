import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'


function Navbar(){

    const { isLoggedIn, isLoading, logoutUser} = useContext(AuthContext)


    return (
        <div className="navbar">
            <nav >
                <div>
                    <Link to='/' >
                        <h3>Berlin Bicycle Station</h3>
                    </Link>
                </div>
                <ul>
                    <Link to='/about' >
                        <li>about the project</li>
                    </Link>
                    <Link to='/start'>
                        <li>participate</li> 
                    </Link>
                    <Link to='/suggestions'>
                        <li>see the suggestions</li>    
                    </Link>
                    <Link to='/contact'> 
                         <li>contact us</li> 
                    </Link>
                    {isLoggedIn ? 
                        <button onClick={logoutUser}>Log out</button> :
                    <Link to='/signup'>
                        <li>Sign-up / Log-in</li>
                    </Link>
                    }
                        
                </ul>
            </nav>
        </div>
    )


}

export default Navbar;