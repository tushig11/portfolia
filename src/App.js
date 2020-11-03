import {useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Menu from "./components/Menu"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [menuState, setMenuState] = useState(false)

  const toggleMenu = () => {
    let stateValue = !menuState ? 'active' : 
      menuState === 'deactive' ? 'active' : 'deactive' 
      console.log(menuState)
    setMenuState(stateValue)
  };

  useEffect( () => {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos - 100 <= window.innerHeight){
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        header.style.zIndex = "1";
      }else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }, [])

  return (
    <div className="App">
        <Menu toggleMenu={toggleMenu} showMenu={menuState} />
        <Navbar toggleMenu={toggleMenu} showMenu={menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;


