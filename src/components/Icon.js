import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

export default function Icon() {
    return (
        <div>
            <div className='container-icons'>
                 <ul className='list-of-icons'>
                <a href='https://www.facebook.com/parada.faii?ref=bookmarks'>
                <li><FontAwesomeIcon icon={['fab', 'facebook']}/></li>
                </a>
                <a href='https://www.instagram.com/iamalicceeee/'>
                <li><FontAwesomeIcon icon={['fab', 'instagram']}/></li>
                </a>
                 <a href='https://twitter.com/ParadaRichards1'>
                <li><FontAwesomeIcon icon={['fab', 'twitter']}/></li>
                </a>
                <a href='https://github.com/Paradafaii28'>
                <li><FontAwesomeIcon icon={['fab', 'github']}/></li> 
                </a>
                <a href='https://www.linkedin.com/in/parada-richardson/'>
                <li><FontAwesomeIcon icon={['fab', 'linkedin']}/></li>  
                </a> 
            </ul>
        </div>
    </div>
    )
}
