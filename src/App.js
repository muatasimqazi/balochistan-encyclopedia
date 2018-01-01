import React, { Component } from 'react';
import { app, base } from './base';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Main from './components/Main'
import Spinner from './components/Spinner'

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        transition: '.6s ease',
      },
      shadow2: {
        boxShadow: '0 15px 35px rgba(50, 50, 90, .1), 0 5px 15px rgba(0, 0, 0, .07)',
      },
      rounded: {
        borderRadius: '4px',
      }
    },
    
    MuiTypography: {
      title: {
        fontWeight: 'normal',
      },
      headline: {
        fontFamily: 'Playfair Display',
        fontSize: '1.7rem', 
        color: '#303336',
        letterSpacing: '1px',
        margin: '2vh 0vw',
        fontWeight: 'normal',
      },
      body1: {
        fontFamily: 'sans-serif',
        // paddingBottom: '1vh',
        color: '#222222',
        fontWeight: 'normal',
        fontSize: '1em',
        lineHeight: '1.6',
        margin: '0.5em 0',
        '-webkit-font-smoothing': 'antialiased',

      }
    },
    MuiButton: {
      root: {
        '-webkit-font-smoothing': 'antialiased',
      },
    },
    MuiCardMedia: {
      root: {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        
      }
    },

  },
});


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

    const rootRef = app.database().ref();
    
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
    const rootRef = app.database().ref();
    const articleRef = rootRef.child('articles/-L1KVr1rfhSOXug2Wgjd/contributors/')
    // console.log("articles /users/$uid/groups/$group_id")
    var data = articleRef.on('value', snap => {
      
    });
    // console.log(articleRef.child('contributors'))
    if (this.state.loading === true) {
      return (
        <div className='sweet-loading' style={{textAlign: "center", position: "absolute", top: "50%", left: "50%"}}>
        <Spinner />
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
