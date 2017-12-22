import React, { Component } from 'react';
import './App.css';
import { firebase } from '@firebase/app';
import Footer from './components/Footer';
import Header from './components/Header';
import TopRow from './components/TopRow';
import MidRow from './components/MidRow';
import MidBottomRow from './components/MidBottomRow';
import BottomTopRow from './components/BottomTopRow';
import BottomRow from './components/BottomRow';


class App extends Component {

  constructor() {
    super();
    this.state = {
      article: 'sample'
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('content');
    const articleRef = rootRef.child('article');
    articleRef.on('value', snap => {
      this.setState({
        article: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
          <Header />
          <br/><br/><br/><br/>  
        <div className="wrapper">
        <TopRow />
        <MidRow />
        <MidBottomRow />
        <BottomTopRow />
        <BottomRow />
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
