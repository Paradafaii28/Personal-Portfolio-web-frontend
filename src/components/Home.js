import React from 'react';
import me from "../photo/parada.png"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import About from './About';
import Footer from './Footer';
import Icon from './Icon';
import Skill from './Skill'
import Resume from './Resume'
import Myblogs from './Myblogs';
library.add(fab)

function App() {
  return (
    <div className="App">
        <div className="container-home">
            <div className="container-letter">
                <h1 className='firstName'>Parada (Alice) <span className="lastName">Richardson</span></h1>
                <br></br>
                <br></br>
                <h2 className="title">I am a <span className="change-animation"></span></h2>
                <br></br>
                <br></br>
                <br></br>
                <a className="button-contact" href="/contactMe">Contact Me</a>
          <Icon />
            </div>
            <div className="container-photo">
                <img src={me} className="image"/>
            </div>
        </div>      
        <About/>
        <Myblogs/>
        <Skill/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default App;
