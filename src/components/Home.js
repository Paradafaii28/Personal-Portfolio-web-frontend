import React from 'react';
import me from "../photo/parada.png"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Profile from './Project';
import Icon from './Icon';
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
                <img src={me} alt="" className="image"/>
            </div>
        </div>      
        <Profile />
    </div>

  );
}

export default App;
