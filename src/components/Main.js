import React, {Component} from 'react';
import MenuAppBar from './MenuAppBar';
import {BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Contribute from './Contribute';
import Home from './Home';
import Contributions from './Contributions';
import Profile from './Profile';
import ArticleList from './ArticleList';
import Article from './Article';
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
                <MenuAppBar authenticated={this.props.authenticated} user={this.props.user} articles={this.props.articles} categories={this.props.categories}/>
                
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/contribute" render={(props) => {
                    const category = this.props.categories;
                    return (
                        category,
                    <Contribute user={this.props.user} categories={this.props.categories} authenticated={this.props.authenticated}/>
                    )
                }}/>

                <Route exact path="/" render={(props) => {
                    return (
                        <Home articles={this.props.articles} />
                    )
                }}/>
                
                <Route exact path ="/articles" render={(props) => {
                  return (
                    <ArticleList articles={this.props.articles} />
                  )
                }} />

                <Route exact path ="/category/:id" render={(props) => {
                  const category = this.props.categories[props.match.params.id]
                  return (
                    <ArticleList articles={this.props.articles} />
                  )
                }} />

                <Route path="/category/articles/:id" render={(props) => {
                  const article = this.props.articles[props.match.params.id];
                  return (
                    article
                    ? <Article article={article} updateArticle={this.updateArticle} />
                    : <h1>Article not found</h1>
                )
                }} />

                <Route exact path ="/user/contributions" render={(props) => {
                  return (
                    <Contributions articles={this.props.articles} />
                  )
                }} />

                <Route exact path ="/user/profile" render={(props) => {
                  return (
                    <Profile />
                  )
                }} />
                </div>
            </BrowserRouter>
            <Footer/>
          </div>

      );
    }
  }
  
  export default Main;