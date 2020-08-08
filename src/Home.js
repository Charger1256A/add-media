import React from 'react';
import Button from 'react-bootstrap/Button';
import fire from './firebase';
import Header from './components/Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout() {
        fire.auth().signOut();
    }


    render() {
        return(
            <div>
                <Header />
                {/* <Button variant="danger" onClick={this.logout}>logout</Button> */}
            </div>
            
        )
    }
}

export default Home;