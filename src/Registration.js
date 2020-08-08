import React from 'react';
import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Input from '@material-ui/core/Input';
import fire from './firebase';



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
                    <div className="input">
                        <label>
                            email
                        <Input name="email" type="text" onChange={(e) => this.setState({ email: e.target.value })} />
                        </label>
                    </div>
                    <div className="input">
                        <label>
                            password
                        <Input name="password" type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                        </label>
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