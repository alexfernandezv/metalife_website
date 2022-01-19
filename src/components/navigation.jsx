import { FaDiscord, FaTwitter } from 'react-icons/fa'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
          
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/navbar/METALIFE D-01.png" className="logo"></img>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-center'>
            <li>
              <a href='#features' className='page-scroll'>
                About us
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Team
              </a>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <a href='https://discord.gg/y7HKrUZ3' className='sm-logos'>
                <FaDiscord/>
              </a>
            </li>
            <li>
              <a href='http://www.twitter.com/MetalifeClub' className='sm-logos'>
                <FaTwitter/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
