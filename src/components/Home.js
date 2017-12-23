import React, { Component } from 'react';
import TopRow from './TopRow';
import MidRow from './MidRow';
import MidBottomRow from './MidBottomRow';
import BottomTopRow from './BottomTopRow';
import BottomRow from './BottomRow';

class Home extends Component {
	
    render() {
        return (
            <div className="wrapper">
            <TopRow />
            
            <MidRow />
            <MidBottomRow />
            <BottomTopRow />
            <BottomRow />
          
            </div>
        );
    }
}

export default Home;