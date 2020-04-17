import React from 'react'
import './Footer.css'
import Icon from './Icon'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <footer>
                    <div id="footer__logo-box">
                        <Icon/>
                    </div>
                    <div className="style-line-of-link">
                        <h3> <Link to={'/'}>Home</Link>// <Link to={'/project'}>My Work</Link>// My Blog // <Link to={'/contactMe'}>Contact Me</Link> </h3>
                    </div>
                    {/* <div className="content">
                        <ul>
                            <li className="contact-me">Contact Me
                                <p>Parada (Alice) Richardson <br></br>
                                    Email: Paradafaii28@gmail.com <br></br>
                                    Phone: 970-817-1904
                                </p>
                            </li>
                        </ul>
                    </div> */}
                </footer>
            </div>
        </div>
    )
}


