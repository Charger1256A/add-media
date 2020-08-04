import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '/Users/adityaram/Documents/add-media/src/assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Header() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [openSignUpModal, setSignUpModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div class="header">
            <Modal
                open={openSignUpModal}
                onClose={() => setSignUpModal(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <center>
                        <img
                            className="header__logo"
                            src={logo}
                            alt="logo"
                        />
                    </center>
                    <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />


                </div>
            </Modal>

            {/* <div className="header__left"> */}
            <img
                className="header__logo"
                src={logo}
                alt="logo"
            />


            <div>
                <Button className="header__button" onClick={() => setSignUpModal(true)}>Sign Up</Button>
                <Button className="header__button">Sign Out</Button>
            </div>
        </div>
    )
}

export default Header
