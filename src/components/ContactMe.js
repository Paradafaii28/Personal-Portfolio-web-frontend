import React, {Component} from 'react'
import './ContactMe.css'
import graphicbg from "../photo/graphic2.png"
import Axios from 'axios';


export default class ContactMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject:'',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }
    
        handleChange = (event) => {
            console.log(event);

            const {name, value}= event.target;

            this.setState({
                [name]: value
            })
        }

        handleSubmit = (event) => {
            event.preventDefault()

            console.log(event.target);

            this.setState({
                disabled: true,
            });

            Axios.post('http://localhost:3030/api/email', this.state)
                .then(res => {
                    if(res.data.success) {
                        this.setState({
                            disabled: false,
                            emailSent: true
                        });
                    } else {
                        this.setState({
                            disabled: false,
                            emailSent: false
                        });
                    }
                })
                .catch(err => {
                    
                    console.log(err);

                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                })
        }

    render() {
    return (
        <div id="container-background">
            <img src={graphicbg} className="graphic-bg"/>
            <div id="container">
            <div id="envelope">
                <div id="lid"></div>
                <div id="letter">
                    <form onSubmit={this.handleSubmit} className="email-form">
                        <label className="style-label">Fullname</label>
                        <input className='style-input' name = "name" value= {this.state.name} onChange={this.handleChange} />
                        <label className="style-label">Email</label>
                        <input className='style-input' name='email' value= {this.state.email} onChange={this.handleChange} />
                        <label className="style-label">Subject</label>
                        <input className='style-input' name='subject' value= {this.state.subject} onChange={this.handleChange} />
                        <label className="style-label">Message</label>
                        <br></br>
                        <textarea  className='style-textarea' name = "message" value= {this.state.message} onChange={this.handleChange}/>
                        <br></br>
                        <input className='style-send' type="submit" value="Send Mail" disabled= {this.state.disabled}/>

                        {this.state.emailSent === true && <p className="sucess-msg">Email Sent Sucessfully</p>}
                        {this.state.emailSent === false && <p className="err-msg">Unable to send Email</p>}
                    </form>
                </div>
                <div id="left-corner"></div>
                <div id="right-corner"></div>
            </div>
            </div>
        </div>
        )
    }
}


