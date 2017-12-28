import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import red from 'material-ui/colors/red';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,

    },

    title: {
       
    },
      media: {
        minHeight: '40vh',
      },
    border: {
      borderLeft: '1px solid #e9ecef',
    },
    card: {
       
      },

      expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      flexGrow: {
        flex: '1 1 auto',
      },
      chip: {
        margin: theme.spacing.unit,
      },
  });
  

class Article extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data: []
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
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return (
                <div className={classes.root}  style={{ padding: 20 }}>
                <Grid container spacing={40}>
                
                <Grid item xs={12} sm={8}>
        <Card className={classes.card}>

        <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
                <Chip label="Basic Chip" className={classes.chip} />
              
            }
            title={article.title}
            subheader= {new Intl.DateTimeFormat('en-US', options).format(new Date(article.date))}
          />

        <CardMedia
          className={classes.media}
          image={`https://www.fnord23.com/wp-content/uploads/2017/12/Cwo-EZ-WEAAt_lW.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
        {this.state.data.body.blocks.map((para, index) => {
                        
          return (
            <Typography gutterBottom key={index}>
            {para.text}

            </Typography>
                
          )
        })}
          
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Card className={classes.card} style={{marginBottom: 20}}>
                <CardContent>
                <Typography type="title" className={classes.title}>
                  Related Topics
                </Typography>
                <div className={classes.demo}>
                  <List>
                      <ListItem button>
                        <ListItemText
                          primary="Single-line item"
                          secondary={true ? 'Secondary text' : null}
                        />
                      </ListItem>
                      <Divider light />
                      <ListItem button>
                        <ListItemText
                          primary="Single-line item"
                          secondary={true ? 'Secondary text' : null}
                        />
                      </ListItem>
                  </List>
                </div> 
                </CardContent>
              </Card> 
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