import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { db, auth } from '../firebase';
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
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // User has logged in...
            console.log(authUser);
            setUser(authUser);
          } else {
            // User has logged out...
            setUser(null);
          }
        })
        return () => {
          // Perform some cleanup actions
          unsubscribe();
        }
      }, [user, username])

    const signUp = (event) => {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch((error) => alert(error.message))
        
        setUsername('');
        setEmail('');
        setPassword('');
        setSignUpModal(false);
    }

    const signIn = (event) => {
        event.preventDefault();
        auth
          .signInWithEmailAndPassword(email, password)
          .catch((error) => alert(error.message))
    
        setOpenSignInModal(false);
      }

    return (
        <div className="header">
            <Modal
                open={openSignUpModal}
                onClose={() => setSignUpModal(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
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


                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit" onClick={signUp}>Sign Up</Button>
                    </form>


                </div>
            </Modal>

            <Modal
                open={openSignInModal}
                onClose={() => setOpenSignInModal(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
                        <center>
                            <img
                                className="header__logo"
                                src={logo}
                                alt="logo"
                            />
                        </center>

                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit" onClick={signIn}>Sign In</Button>
                    </form>


                </div>
            </Modal>

            <img
                className="header__logo"
                src={logo}
                alt="logo"
            />


            <div>
                {user ? (
                    <div className="header__right">
                    <p>{user.displayName}</p>
                    <Button onClick={() => auth.signOut()}>Logout</Button>
                    </div>
                ) : (
                    <div className="header__right">
                    <Button onClick={() => setSignUpModal(true)}>Sign Up</Button>
                    <Button onClick={() => setOpenSignInModal(true)}>Sign In</Button>
                    </div>
                )}
                
               
            </div>
        </div>
    )
}

export default Header
