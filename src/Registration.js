import React from 'react';
import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from '@material-ui/core'
import fire from './firebase';
import logo from './assets/logo.png';



class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch((error) => {
            console.log(error);
        });
    }

    signUp(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (

            <div className="container">
                <form>
                    <img
                        src={logo}
                        alt="logo"
                        />
                    <div className="input">
                        <Input name="email" type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="input">
                       
                        <Input name="password" type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <div>
                        <Button variant="primary" onClick={this.signUp}>Sign Up</Button>
                        <Button variant="success" onClick={this.login}>Sign In</Button>

                    </div>


                </form>
            </div>
        )
    }
}

export default Registration;