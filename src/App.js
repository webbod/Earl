import logo from './logo.svg';
import './App.css';

const slogans = [
  ["Push", "Past", "Limits"],
  ["Feel", "the", "Burn"],
  ["Conquer", "Every", "Obstacle"],
  ["Strive", "Sweat", "Succeed"],
  ["Strength", "Through", "Struggle"],
  ["Earn", "Your", "Strength"],
  ["Rise", "Grind", "Repeat"],
  ["Dare", "to", "Endure"],
  ["Train", "Transform", "Triumph"],
  ["Beyond", "Every", "Boundary"]
];

const videos = [
 "stretches.mp4", "shoulder taps.mp4", "planks.mp4", "clean to press.mp4", "boxer.mp4", "lunges.mp4", "squat.mp4", "kettlebells.mp4", "ohp.mp4", "situps.mp4", "bench press.mp4", "circuit.mp4", "legpress.mp4", "pushup.mp4", "running.mp4", "clean to press.mp4"
];

const wrapCharactersInSpan = (text, quote, start) => {
  return (
    <p>
      {quote === '&ldquo;' ? <span style={{'--index' : 0}}>“</span> : ''}
      {text.split('').map((char, index) => <span key={index} style={{ '--index': start + index + 1 }}>{char}</span>)}
      {quote === '&rdquo;' ? <span style={{ '--index': start + text.length + 2 }}>”</span> : ''}
    </p>
  );
};

const sloganRenderer = () => {

  let slogan = slogans[Math.floor(Math.random() * slogans.length)];
  return [
    wrapCharactersInSpan(slogan[0], '&ldquo;', 0),
    wrapCharactersInSpan(slogan[1], '', slogan[0].length),
    wrapCharactersInSpan(slogan[2], '&rdquo;', slogan[0].length + slogan[1].length)
  ];
}

function App() {
  let video = videos[Math.floor(Math.random() * videos.length)];

  return (
    <div className="app">
      <a name="top"></a>
      <div className="video">
        <video autoPlay muted loop id="backgroundVideo">
          <source src={video} type="video/mp4"/>
        </video>
        <div className="overlay"></div>
      </div>
      <div className="app-content">
        <ul className="header">
          <li><a href="#top"><img src="logo.png" className="logo"/></a></li>
          <li><a href="#fitness">Fitness</a></li>
          <li><a href="#nutrition">Nutrition</a></li>
          <li><a href="#coaching">Coaching</a></li>
          <li><a href="#rehab">Rehab</a></li>
        </ul>
        <div className="spacer"></div>  
        <div className="spacer"></div>         
        <div className="content">
          <div className="slogan">
            {sloganRenderer()}
          </div>
          <div className="nameplate">
            <p>Earl James</p>
            <p>&nbsp;- Personal Fitness Coach</p>
          </div>
          <div className="spacer"></div>
          <div className="cta">
            <button>Get Started</button>
            <button>Book Now</button>
          </div>        
        </div>
      </div>
      <a name="fitness"></a>
      <div className="section fitness">
        <div className="app-content">
          <h2>Fitness</h2>
        </div>
      </div>
      <a name="nutrition"></a>
      <div className="section nutrition">
        <div className="app-content">
          <h2>Nutrition</h2>
        </div>
      </div>
      <a name="coaching"></a>
      <div className="section coaching">
        <div className="app-content">
          <h2>Coaching</h2>
        </div>
      </div>
      <a name="rehab"></a>
      <div className="section rehab">
        <div className="app-content"> 
          <h2>Rehab</h2>
        </div>
      </div>      
      <div className="spacer"></div>
        <div className="quote">
          <p>&ldquo;Strength grows in the moments when you think you can't go on.&rdquo;</p>
        </div>

        <footer className="app-footer">
          <div className="icons">
            <img src="facebook.png" className="social"/>
            <img src="logo.jpg" className="logo"/>
            <img src="instagram.png" className="social"/>
          </div>
        </footer>      
    </div>
  );
}

export default App;
