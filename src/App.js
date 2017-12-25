import React, { Component } from 'react';
import './App.css';
import { firebase } from '@firebase/app';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login'
import Logout from './components/Logout'
import Contribute from './components/Contribute'
import Home from './components/Home'
import {BrowserRouter, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Contributions from './components/Contributions';
import Settings from './components/Settings';
import { app, base } from './base';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    constructor() {
      super();
      this.addArticle = this.addArticle.bind(this);
      this.updateArticle = this.updateArticle.bind(this);
      this.state = {
        articles: { },
        authenticated: false,
        loading: true,
        categories: {},
        user: { },
        latestArticles: { }
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
        loading: false,
        user: user
      })
    } else {
      this.setState({
        authenticated: false,
        loading: false
      })
    }
  })
  this.articlesRef = base.syncState('content/articles', {
    context: this,
    state: 'articles'
  });

  this.categoryRef = base.syncState('content/categories', {
    context: this,
    state: 'categories'
  });

}
componentWillUnmount() {
  this.removeAuthListener();
  base.removeBinding(this.articlesRef);

}

  componentDidMount() {
    
    const rootRef = firebase.database().ref().child('content');
    
    const articleRef = rootRef.child('articles');
    const catRef = rootRef.child('categories');
    const lim = articleRef.limitToLast(5).on('value', snap => {
      this.setState({
        latestArticles: snap.val()
      })
    });
    
    
    

    articleRef.on('value', snap => {
      this.setState({
        article: snap.val()
      });
    });

    catRef.on('value', snap => {
      this.setState({
        category: snap.val()
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
        <Header authenticated={this.state.authenticated} user={this.state.user}/>
          <div className="workspace">
            <Route exact path="/logout" component={Logout} />
            <Route exact path ="/articles" render={(props) => {
              return (
                <ArticleList articles={this.state.articles} />
              )
            }} />
            <Route path="/articles/:url" render={(props) => {
              const article = this.state.articles[props.match.params.url];
              console.log(props.match.params)
              return (
                article
                ? <Article article={article} updateArticle={this.updateArticle} />
                : <h1>Article not found</h1>
            )
            }} />
            <Route exact path="/login" component={Login} />
          <Route exact path="/contribute" render={(props) => {
          const category = this.state.categories;
          return (
            category,
          <Contribute user={this.state.user} category={category} authenticated={this.state.authenticated}/>
        )
        }}/>

        <Route exact path="/contributions" render={(props) => {
          return (
            <Contributions articles={this.state.articles}/>
          )
        }}/>

        <Route exact path="/settings" render={(props) => {
          return(
            <Settings />
          )
        }}/>

<MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
            <Route exact path="/" render={(props) => {
              return (
                <Home articles={this.state.articles} categories={this.state.categories} latestArticles={this.state.latestArticles}/>
              )
            }}/>
          </div> 
        </div>
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default App;
