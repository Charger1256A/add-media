import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import fire from '../firebase';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            createPost: false,
            username: '',
            email: '',
            password: '',
            user: null
        }
    }

    logout(e) {
        fire.auth().signOut();
    }
    render() {

         

        return (
            <div className="header">
                <img
                    className="header__logo"
                    src={logo}
                    alt="logo"
                />


                <div>
                    
                        <div className="header__right">
                            <Button>{this.props.username}</Button>
                            <Button onClick={this.logout}>Logout</Button>
                        </div>
                           


                </div>
            </div>
        )
    }
}

export default Header;
