import React, { Component, Fragment } from 'react';
import './App.css';
import Paint from './paint';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h3 style={{ textAlign: 'center' }}>My Paint</h3>
                <div className="main">

                    <div>
                        <Paint />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
