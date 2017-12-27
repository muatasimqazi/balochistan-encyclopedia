import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';

import one from '../img/one.jpeg';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
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
        height: 250,
      },
    border: {
      borderLeft: '1px solid #e9ecef',
    },
    card: {
       
      },
      media: {
        height: 194,
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
  
  
class ArticleList extends Component {
    render() {
        const { articles } = this.props
        console.log(articles)
        const articleId = Object.keys(articles)
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
                                title="Titles"
                                subheader= {new Intl.DateTimeFormat('en-US', options).format(new Date())}
                            />
                            <CardMedia
                                className={classes.media}
                                image={one}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom>
                                    Body text
                                </Typography>
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

                    <Grid item xs={12} sm={8}>
                        <Card className={classes.card} style={{marginBottom: 20}}>
                            <CardContent>
                                <Typography type="title" className={classes.title}>
                                    Related Topics
                                </Typography>
                                <div className={classes.demo}>
                                    <List>
                                        {articleId.map((id, index) => {
                                        const article = articles[id]
                                        return (
                                        <div key={index}>     
                                        <ListItem button component={ Link } to={`/category/articles/${id}`}>
                                            <ListItemText 
                                            primary={article.title}
                                            secondary={true ? 'Secondary text' : null}
                                            />
                                        </ListItem>
                                        <Divider light />
                                </div>
                                        )
                                        })
                                        }
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

ArticleList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ArticleList);