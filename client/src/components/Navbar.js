import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'


function Navbar(){

    const { isLoggedIn, isLoading, logoutUser} = useContext(AuthContext)


    return (
        <div className="navbar">
            <nav >
                <div id="title">
                        <h3> <Link to='/' >Berlin Bicycle Station</Link></h3>
                </div>
                <ul>
                        <li> <Link to='/about' >about the project</Link></li>
                        <li><Link to='/start'>participate</Link></li> 
                        <li><Link to='/suggestions'>see the suggestions</Link></li>    
                         <li><Link to='/contact'>contact us</Link></li> 
                    
                    {isLoggedIn ? 
                        <button onClick={logoutUser}>Log out</button> :
                        <li><Link to='/signup'>Sign-up / Log-in </Link></li>
                    }
                        
                </ul>
            </nav>
        </div>
    )


}

export default Navbar;