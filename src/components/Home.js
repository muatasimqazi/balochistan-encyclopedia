import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopRow from './TopRow';
import MidRow from './MidRow';
import MidBottomRow from './MidBottomRow';
import BottomTopRow from './BottomTopRow';
import BottomRow from './BottomRow';

class Home extends Component {
	
    render() {
        return (
            <div className="wrapper">
            <TopRow latestArticles={this.props.latestArticles}/>
           
            <MidBottomRow />
            <BottomTopRow articles={this.props.articles} />
            <BottomRow categories={this.props.categories} />
          
            </div>
        );
    }
}

export default Home;