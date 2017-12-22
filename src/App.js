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
import Login from './components/Login'

import {BrowserRouter, Route, Link} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

import { base } from './base';



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
      artpro: ""
    };

    this.setState({articles});
  }
  updateArticle(article) {
    const articles = {...this.state.articles};
    articles[article.id] = article

    this.setState({articles});
  }

componentWillMount() {
  this.articlesRef = base.syncState('articles', {
    context: this,
    state: 'articles'
  });

}
componentWillUnmount() {
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
    return (
      <div className="App">
       
      <BrowserRouter>

      <div className="main-content">
      <Header authenticated={this.state.authenticated} />
        <div className="workspace">
          <Route exact path ="/articles" render={(props) => {
            const articleIds = Object.keys(this.state.articles);
            return (
              <ul>
                {articleIds.map((id) => {
                  return (
                  <li key={id}>
                    <Link to={`/articles/${id}`}>Article {id}</Link>
                  </li>
                  )
                })}

              </ul>
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


      </div> 
      </div>

      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}

export default App;
