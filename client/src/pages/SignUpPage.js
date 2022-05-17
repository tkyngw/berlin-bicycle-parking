import React from "react";
import axios from "axios";

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


function SignUpPage(){

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [errorMessage, setErrorMessage] = useState(undefined);

    // const navigate = useNavigate()

    // const handleSubmit = e => {
	// 	e.preventDefault()
	// 	const requestBody = { email, password, name }
	// 	axios.post('/api/auth/signup', requestBody)
	// 		.then(response => {
	// 			// redirect to login
	// 			navigate('/login')
	// 		})
	// 		.catch(err => {
	// 			const errorDescription = err.response.data.message
	// 			setErrorMessage(errorDescription)
	// 		})
	// }

    // const handleEmail = e => setEmail(e.target.value)
	// const handleName = e => setName(e.target.value)
	// const handlePassword = e => setPassword(e.target.value)

    return (
        <div>
            {/* <article>
            <h2>Create an account</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text" name="name" value={name} onChange={handleName} placeholder="name" />
                   <input type="email" name="email" value={email} placeholder="Email" onChange={handleEmail}/>
                   <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" />
                   <button type="submit">Sign up</button>
               </form>
               {errorMessage && <h5>{errorMessage}</h5>}
               <p>Have an account? <Link to='/login'>Log-in</Link></p>
            </article> */}

        </div>
    )

}

export default SignUpPage;