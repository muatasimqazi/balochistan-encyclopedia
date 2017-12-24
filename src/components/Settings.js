import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Settings extends Component {
    render() {

        return (
            <div className="section pt-3 pb-3 pt-5 bg-white article">
            <div className="fluid-container ml-4 mr-4">
                <div className="row">
                    <div className="col">
                    <h1 style={{marginBottom: "0.5em"}}>Settings</h1>
            </div>
            </div>
            </div>
            </div>
        );
    }
}


export default Settings;