import Particles from 'react-particles-js';

const Header = props => {
    return (
      <header id="welcome-section">
        <div className="container">
          <h1>
            <span className="line">I write a code for</span>
            <span className="line">mobile <span className="color">&</span> web</span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
        <Particles height={window.outerHeight} params={{
            "particles": {
                "number": {
                    "value": 70
                },
                "size": {
                    "value": 5
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick":{
                        "enable": true,
                        "mode": "bubble"  
                    }
                }
            }
        }} />
      </header>
    );
  };

export default Header