import React from 'react';
import me from "../photo/parada.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
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
            <div className='container-icons'>
                <ul className='list-of-icons'>
                    <li><FontAwesomeIcon icon={['fab', 'facebook']}/></li>
                    <li><FontAwesomeIcon icon={['fab', 'instagram']}/></li>
                    <li><FontAwesomeIcon icon={['fab', 'twitter']}/></li>
                    <li><FontAwesomeIcon icon={['fab', 'github']}/></li>  
                </ul>
            </div>
            </div>
            <div className="container-photo">
                <img src={me} className="image"/>
            </div>
        </div>
    </div>

  );
}

export default App;
