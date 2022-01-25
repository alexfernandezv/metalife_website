import Countdown from "react-countdown";
const Completionist = () => <span>MINT NOW!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} days : {hours} hours : {minutes} minutes : {seconds} seconds</span>;
  }
};
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
       
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                 
                  className='btn btn-custom btn-lg page-scroll'
                >
                 <Countdown
                    date={Date.UTC(2022,3,30,18,0,0,0)}
                    renderer={renderer}
                />
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
