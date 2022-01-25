import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Roadmap</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="PRE-LAUNCH"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
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
          <br/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="LAUNCH"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h4 className="vertical-timeline-element-subtitle">• Metalife access passes will be available in a public mint. First come first serve, 1 SOL + fees. 5000 - (whitelisted members' passes minted from pre-sale) will be available to mint.</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="RIGHT AFTER MINT"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-subtitle">• Secondary market listing on Magic Eden</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Grant access to the Metalife game pre Alpha to every holder</h4>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">• Creation of the Metalife DAO</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q2 2022"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
          date="Q3 2022"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
          date="Q4 2022"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
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
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="UPCOMING FUTURE"
          dateClassName="rm-dates"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-subtitle">LOADING...</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
      </div>
    </div>
  )
}
