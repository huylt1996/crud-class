import React, { Component } from 'react';
// import TableDetail from '../components/TableDetail';
// import Header from '../components/Header';
import Data from '../services/Person';
// import Button from '../components/Button';
import Menu from '../components/Menu';

class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Data>
                    {/* <Button /> */}
                </Data>
            </div>
        )
    }
}

export default Home;