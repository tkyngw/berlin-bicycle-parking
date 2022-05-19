
function ContactPage () {

    return(
        <div className='signup'>
            <article>
                <h4>help us make Berlin bicycle friendlier 🚲</h4>
                <form action="mailto:berlin-bicycle-parking@email.com" method='get'>
                    <input type="text" placeholder="your name" />
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Message"/>
                    <button>send</button>
                </form>
            </article>
        </div>
    )

}

export default ContactPage;