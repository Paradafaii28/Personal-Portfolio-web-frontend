import React, { Component } from 'react'
import './Myblogs.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import blog1 from "../photo/blog1.png"
import blog2 from "../photo/blog2.png"
import blog3 from "../photo/blog3.png"
import blog4 from "../photo/blog4.png"


export default class  Myblogs extends Component {

    state = {
        blog: true
    }
    
    render(){
    return (
        <div className="container-portfolio">
            <div>
                <div className="container-blog">
                <ScrollAnimation animateIn="bounceOutLeft"
                delay={1000}
                initiallyVisible={true}
                afterAnimatedIn={() => {
                    this.setState({blog: false})

                }}
                > 
                {this.state.blog ? <h1 id="heading-blog">My Blog</h1> : null }
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="bounceInRight"
             delay={1900}
             animateOnce={true}>
                <h1 id="second-heading-blog">My Blog</h1> 
                <ul className="style-cards">
                    <li><img src={blog1} className='blog'/></li>
                    <li><img src={blog2} className='blog'/></li>
                    <li><img src={blog3} className='blog'/></li>
                    <li><img src={blog4} className='blog'/></li>
                </ul>
            </ScrollAnimation>
            </div>
        </div>
    )}
}


    