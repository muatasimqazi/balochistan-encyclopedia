import React, { Component } from 'react';
import './App.css';
import { firebase } from '@firebase/app';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import {BrowserRouter, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import { app, base } from './base';

class App extends Component {

    constructor() {
      super();
      this.addArticle = this.addArticle.bind(this);
      this.updateArticle = this.updateArticle.bind(this);
      this.state = {
        articles: { },
        authenticated: false,
        loading: true
      };
  }

  addArticle(title) {
    const articles = {...this.state.articles};
    const id = Date.now();
    articles[id] = {
      id: id,
      title: title,
      author: "",
      text: ""
    };

    this.setState({articles});
  }
  updateArticle(article) {
    const articles = {...this.state.articles};
    articles[article.id] = article

    this.setState({articles});
  }

componentWillMount() {
  this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authenticated: true,
        loading: false
      })
    } else {
      this.setState({
        authenticated: false,
        loading: false
      })
    }
  })
  this.articlesRef = base.syncState('articles', {
    context: this,
    state: 'articles'
  });

}
componentWillUnmount() {
  this.removeAuthListener();
  base.removeBinding(this.articlesRef);

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
    if (this.state.loading === true) {
      return (
        <div style={{textAlign: "center", position: "absolute", top: "50%", left: "50%"}}>
        <h3>Loading</h3>
        </div>
      )
    }
    return (
      <div className="App index-page sidebar-collapse">
        <BrowserRouter>
        <div className="main-content">
        <Header authenticated={this.state.authenticated} />
          <div className="workspace">
            <Route exact path="/logout" component={Logout} />
            <Route exact path ="/articles" render={(props) => {
              return (
                <ArticleList articles={this.state.articles} />
              )
            }} />
            <Route path="/articles/:articleId" render={(props) => {
              const article = this.state.articles[props.match.params.articleId];
              return (
                article
                ? <Article article={article} updateArticle={this.updateArticle} />
                : <h1>Article not found</h1>
            )
            }} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </div> 
        </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
