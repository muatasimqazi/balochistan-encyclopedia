import React, { Component } from 'react';
// import './App.css';
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
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Main from './components/Main'
import { ClipLoader } from 'react-spinners';


const theme = createMuiTheme();

class App extends Component {

    constructor() {
      super();
      this.addArticle = this.addArticle.bind(this);
      this.updateArticle = this.updateArticle.bind(this);
      this.updateCategory = this.updateCategory.bind(this);
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

  updateCategory(category) {
    const categories = {...this.state.categories};
    categories[category.id] = category

    this.setState({categories});
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
  this.articlesRef = base.syncState('articles', {
    context: this,
    state: 'articles'
  });

  this.categoryRef = base.syncState('categories', {
    context: this,
    state: 'categories'
  });

}
componentWillUnmount() {
  this.removeAuthListener();
  base.removeBinding(this.articlesRef);

}

  componentDidMount() {
    
    const rootRef = firebase.database().ref();
    
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
      // console.log("categories: ", snap.val())
      this.setState({
        category: snap.val()
      });
    });

  }


  render() {
    console.log("Our categos state")
    console.log(this.state.categories)
    const rootRef = app.database().ref();
    // console.log(this.state)
    const articleRef = rootRef.child('articles/-L1KVr1rfhSOXug2Wgjd/contributors/')
    // console.log("articles /users/$uid/groups/$group_id")
    var data = articleRef.on('value', snap => {
      
    });
    // console.log(articleRef.child('contributors'))
    if (this.state.loading === true) {
      return (
        <div className='sweet-loading' style={{textAlign: "center", position: "absolute", top: "50%", left: "50%"}}>
        <ClipLoader
          color={'#123abc'} 
          loading={this.state.loading} 
        />
      </div>
      )
    }
    return (
      <div>
      <MuiThemeProvider  theme={theme}>
          <Main authenticated={this.state.authenticated} user={this.state.user} articles={this.state.latestArticles} categories={this.state.categories}/>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
