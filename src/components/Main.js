import React, {Component} from 'react';
import MenuAppBar from './MenuAppBar';
import {BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Contribute from './Contribute';
import Home from './Home'
import Contributions from './Contributions';
import Footer from './Footer';

  class Main extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleRequestClose = this.handleRequestClose.bind(this);
      this.handleTouchTap = this.handleTouchTap.bind(this);
  
      this.state = {
        open: false,
      };
    }
  
    handleRequestClose() {
      this.setState({
        open: false,
      });
    }
  
    handleTouchTap() {
      this.setState({
        open: true,
      });
    }
  
    render() {
      
  
      return (
            <div>
            <BrowserRouter>
            <div>
            <MenuAppBar authenticated={this.props.authenticated} user={this.props.user}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/contribute" render={(props) => {
                const category = this.state.categories;
                return (
                    category,
                <Contribute user={this.state.user} category={category} authenticated={this.props.authenticated}/>
                )
            }}/>
            <Route exact path="/" render={(props) => {
                return (
                    <Home />
                )
            }}/>
            <Route exact path="/contributions" render={(props) => {
                return (
                    <Contributions articles={this.props.articles} authenticated={this.props.authenticated}/>
                )
            }}/>
            </div>
          </BrowserRouter>
          <Footer/>
            </div>

      );
    }
  }
  
  export default Main;