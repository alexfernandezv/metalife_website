import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Circles } from 'react-loading-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Roadmap</h2>
        </div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#9365DB', color: 'white' }}
          date="PRE-LAUNCH"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(147, 101, 219)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faRocket} size='2x' />}
        >
          <h4 className="vertical-timeline-element-subtitle">• Website, Twitter and Discord launch</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Secure secondary market listing at Magic Eden</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Metalife trailer out!</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Whitepaper v.0.1 and roadmap confection</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Pre-sale mint for whitelisted members (500 in total)</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• 5 Twitter contests: at 100, 250, 500 and 1k, 5k Twitter followers milestone</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#9365DB', color: 'white' }}
          date="LAUNCH"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(147, 101, 219)', color: '#fff' }}
          icon={<Circles/>}
        >
          <h4 className="vertical-timeline-element-subtitle">• Metalife access passes will be available in a public mint. First come first serve, 1 SOL + fees. 5000 - (whitelisted members' passes minted from pre-sale) will be available to mint.</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#9365DB', color: 'white' }}
          date="RIGHT AFTER MINT"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(147, 101, 219)', color: '#fff' }}
          icon={<Circles/>}
        >
          <h4 className="vertical-timeline-element-subtitle">• Secondary market listing on Magic Eden</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Grant access to the Metalife game pre Alpha to every holder</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of the Metalife DAO</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#9365DB', color: 'white' }}
          date="Q2 2022"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(147, 101, 219)', color: '#fff' }}
          icon={<Circles/>}
        >
          <h4 className="vertical-timeline-element-subtitle">• Complete physical and appearance character customization</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of shops, restaurants, bars and gyms inside the game</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Whitepaper v.1.0</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of the car workshop and concessionaire</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of the Metalife Solana Casino. You will be able to bet your Solanas in a real-game casino.</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of gun shops and improvement of the gun system in-game </h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Improve of the house building system and adding NFT customizable furniture</h4> 
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#9365DB', color: 'white' }}
          date="Q3 2022"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(147, 101, 219)', color: '#fff' }}
          icon={<Circles/>}
        >
          <h4 className="vertical-timeline-element-subtitle">• New in-game jobs and missions</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Tokenomics and release of the $LIFE token</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• P2E Metalife Metaverse BEGINS</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Implementation of the gameplay evolution and the character progression: muscle and character development, skills tree...</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Implementation of sport activities in-game: soccer, basketball, fight club...</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#9365DB', color: 'white' }}
          date="Q4 2022"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(147, 101, 219)', color: '#fff' }}
          icon={<Circles/>}
        >
          <h4 className="vertical-timeline-element-subtitle">• Online server implementation</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of the custom jobs and missions editor</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Strip club, coffee shop and other joyful activities added to the world</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Relationships and dating system</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Private parties and events to NFT holders</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Multi-server online metaverse</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• No NPC, only online players</h4>
        </VerticalTimelineElement>
        
       
      </VerticalTimeline>
      </div>
    </div>
  )
}
