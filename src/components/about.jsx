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
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <span class="shiny">
                <span class="inner-shiny"> trailer</span>
                
              </span>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <iframe className='trailer-embed' src="https://www.youtube.com/embed/hvoD7ehZPcM" title="YouTube video player"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
