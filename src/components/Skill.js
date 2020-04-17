import React from 'react'
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)


export default function Skill() {
    return (
        
    <div className="container-skill">
        <div className="container-listOfSkill">
            <h1 className="style-h1">What Can I do</h1>
            <ul className="container-list">
                <li className="style-li"><FontAwesomeIcon icon={['fas', 'gem']} className="icon"/>Ruby on Rails</li>
                <li className="style-li"><FontAwesomeIcon icon={['fab', 'js']} className="icon"/>Javascript</li>
                <li className="style-li"><FontAwesomeIcon icon={['fab', 'html5']} className="icon"/>HTML/CSS</li>
                <li className="style-li"><FontAwesomeIcon icon={['fab', 'react']} className="icon"/>React</li>
            </ul>
        </div>
    </div>
    )
}
