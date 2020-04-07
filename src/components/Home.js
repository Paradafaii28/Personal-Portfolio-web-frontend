import React from 'react';
import CustomNavBar from './CustomNavBar'
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
        <div className="container-profile">
            <div className="container-about">
                <h1>About Me</h1>
            </div>
            <div className="container-p">
                <p>My name is Parada (Alice) Richardson. I am originally from Thailand, and I have lived in the USA for almost 4 years now.<br/>
                    My move to America has been a dream come true. I earned a degree with a major in interior design, and a minor in architecture.
                    <br/>
                    I love the opportunity to be creative and work to solve problems. Becoming a software developer is the next chapter in my life,
                    and I very interested and passionate to be able to learn this new skill.<br/>
                    <br/>
                    Creative and enthusiastic. Very personable, with a talent for developing sold client relationships.
                    Outstanding work ethic with a dedication to exceeding expectation. Willingness to learn and eager to always improve upon my skills.
                </p>
            </div>
        </div>
        <div className="container-skill">
            <div className="container-topic">
                <h1>What Can I do</h1>
            </div>
            <div className="container-listOfSkill">
                <ul className="container-list">
                    <li>Ruby on Rails</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>React</li>
                </ul>
            </div>
        </div>
    </div>

  );
}

export default App;
