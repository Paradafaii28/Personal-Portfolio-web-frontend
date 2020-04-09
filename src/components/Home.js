import React from 'react';
import me from "../photo/parada.png"

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
            </div>
            <div className="container-photo">
                <img src={me} className="image"/>
            </div>
        </div>
    </div>

  );
}

export default App;
