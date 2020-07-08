import React from 'react'
import './Resume.css'
import PDF from "../photo/resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)


export default function Resume() {
    return (
        <div className="container-resume">
            <section className="style-title">
                <h1 className='style-resume'>Resume</h1>
                 <div className='container-pdf'>
                    <iframe title="resume" className="resume-pdf" src={PDF}></iframe>
                    <a href={PDF} download>
                    <button className="btn"><FontAwesomeIcon icon={['fas', 'download']} className="icon-download"/> Download PDF</button>
                    </a>
                 </div>
            </section>
        </div>
    )
}
