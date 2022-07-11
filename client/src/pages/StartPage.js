import StationList from '../components/StationList'
import circle from '../images/circle.png'

function StartPage() {


    return (
        <div className='contentpage'>
            <aside id="sidebar">
                <h2>1</h2>  
                <h3>Choose a station to get started</h3>
            </aside>
            <article className='station'>
            <div id='start'>
              <StationList /> 
              </div>
            </article>
        </div>
    )
}

export default StartPage;