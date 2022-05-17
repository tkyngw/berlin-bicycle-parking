import React , { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth'


function LogInPage(){

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState(undefined);

const navigate = useNavigate()

const { storeToken, verifyStoredToken } = useContext(AuthContext)

const handleSubmit = e => {
    e.preventDefault()
    const requestBody = { email, password }
    axios.post('/api/auth/login', requestBody)
        .then(response => {
            // redirect to projects
            console.log('i have a token mothafukkas')
            const token = response.data.authToken
            // store the token
            storeToken(token)
            verifyStoredToken()
                .then(() => {
                    // redirect to projects
                    navigate('/')
                })
        })
        .catch(err => {
            const errorDescription = err.response.data.message
            setErrorMessage(errorDescription)
        })
}


const handleEmail = e => setEmail(e.target.value)
const handlePassword = e => setPassword(e.target.value)


    return (
        <div>
            <article>
            <h2>Log in to leave a suggestion </h2>
               <form onSubmit={handleSubmit}>
                   <input type="email" value={email} placeholder="Email" onChange={handleEmail}/>
                   <input type="password" value={password} placeholder="Password" onChange={handlePassword}/>
                   <button type="submit">Log in</button>
               </form>

               {errorMessage && <h5>{errorMessage}</h5>}

            </article>

        </div>
    )

}

export default LogInPage;