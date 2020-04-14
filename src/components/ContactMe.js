import React, {Component} from 'react'
import './ContactMe.css'
import Axios from 'axios';


export default class ContactMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
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
            <div id="container">
                <div className="envelope">
                    <div className="paper">
                        <div className="inner1" >
                            <div className="inner2">
                            </div>
                            <div className="cover"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="email-form">
                    <label>Fullname</label>
                    <input name = "name" value= {this.state.name} onChange={this.handleChange} />
                    <label>Email</label>
                    <input name='email' value= {this.state.email} onChange={this.handleChange} />
                    <label>Message</label>
                    <textarea name = "message" value= {this.state.message} onChange={this.handleChange}/>
                    <input type="submit" value="Send" disabled= {this.state.disabled}/>

                    {this.state.emailSent === true && <p className="sucess-msg">Email Sent Sucessfully</p>}
                    {this.state.emailSent === false && <p className="err-msg">Unable to send Email</p>}
                </form>
            </div>
        </div>
        )
    }
}


