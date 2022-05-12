
import Navbar from "../components/Navbar";

function AuthPage(){
    return (
        <div>
            <header>
                <Navbar />  
            </header>
            <article>
            <h2>Create an account</h2>
               <form>
                   <input type="text" placeholder="First Name"/>
                   <input type="text" placeholder="Last Name"/>
                   <input type="text" placeholder="User Name"/>
                   <input type="password" placeholder="Password"/>
                   <input type="email" placeholder="Email"/>
                   <button type="submit">Sign up</button>
               </form>
               <p>Have an account? Log-in</p>
            </article>

        </div>
    )

}

export default AuthPage;