import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ArticleCard from './ArticleCard';
import InteractiveList from './InteractiveList';
import Spinner from './Spinner'

const styles = theme => ({
    root: {
      padding: 20
    },
    spinner: {
      textAlign: 'center',
      height: 400,
      position: 'relative',
      marginTop: '10%'
    },

  });
  
  const content = {
    title: 'Card Title',
    media: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg',
    text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
  }

class Article extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data: [],
            loading: false
        }
    }

    handleChange(event) {
        const title = event.target.value;
        this.props.updateArticle({
            title: title
        });
        
    }

    componentWillMount() {
        this.setState({
            data: this.props.article
        });
    }
    
    
    render() {
        const { classes } = this.props;
        const { article } = this.props;
        console.log(article)
        article.image = "https://media.npr.org/assets/img/2017/12/31/ap_17365386371118_wide-7aca1c762de870cec37bfaf6d6a55a975f3494e6-s1800-c85.jpg"
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

      if (this.state.loading) {
        return (
          <div className={classes.spinner}>
          <Spinner />
        </div>
        )
      }
        return (
              <div className={classes.root}>
                <Grid container spacing={40}>                
                  <Grid item xs={12} sm={12} md={9}>
                    <ArticleCard article={article}/>
                  </Grid>

                  <Grid item xs={12} sm={12} md={3}>
                    <InteractiveList />
                  </Grid>
                </Grid>
              </div>
        );
    }
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Article);