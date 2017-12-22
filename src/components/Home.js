import React, { Component } from 'react';
import logo from '../logo.svg';
import TopRow from './TopRow';
import MidRow from './MidRow';
import MidBottomRow from './MidBottomRow';
import BottomTopRow from './BottomTopRow';
import BottomRow from './BottomRow';
import {Redirect } from 'react-router-dom';
import {app, facebookProvider } from '../base';

class Home extends Component {
	
    render() {
        return (
            <div className="wrapper">
            <TopRow />
            <MidRow />
            <MidBottomRow />
            <BottomTopRow />
            
            </div>
        );
    }
}

export default Home;