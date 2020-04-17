import React, { Component } from 'react'
import './Myblogs.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';


export default class  Myblogs extends Component {

    state = {
        blog: true
    }
    
    render(){
    return (
        <div className="container-portfolio">
            <div className="section-blog">
             
            <ScrollAnimation animateIn="bounceOutLeft"
            delay={1000}
            initiallyVisible={true}
            afterAnimatedIn={() => {
                this.setState({blog: false})

              }}
            > 
               {this.state.blog ? <h1 className="heading-blog">My Blog</h1> : null }
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="bounceInRight"
             delay={1900}
             animateOnce={true}>
                <ul className="style-cards">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
            </ScrollAnimation>
            </div>
        </div>
    )}
}


    