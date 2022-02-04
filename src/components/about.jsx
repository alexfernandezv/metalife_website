import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>About Us</h2>
              <p>Metalife is a sandbox P2E game where you can do, create and discover whatever you imagine. From driving amazing cars around the Metalife city, to carrying out some types of jobs to earn money and build your own house. <br/><br/> Our game has everything people like about life simulators and open-world games whith complete freedom, so what better combination to get you into the city!</p>
            </div>
            <div className='trailer-text'>
              <span class="shiny">
                <span class="inner-shiny" style={{textShadow: '0px 1px'}}> trailer</span>
              </span>
              <div className='low-trailer'>
                <span class="out">
                  <span class="inner-out"> out </span>
                </span>
                <span class="now">
                  <span class="inner-now"> now</span>
                </span>
              </div>
             
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <iframe className='trailer-embed' src="https://www.youtube.com/embed/bW4qTajjKas" title="YouTube video player"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
