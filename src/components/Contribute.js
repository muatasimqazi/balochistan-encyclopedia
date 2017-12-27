import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app } from '../base';
import MyEditor from './MyEditor'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import FileUpload from 'material-ui-icons/FileUpload';
import Send from 'material-ui-icons/Send';
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
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel} from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Checkbox from 'material-ui/Checkbox';

import one from '../img/one.jpeg';
import Avatar from 'material-ui/Avatar';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Chip from 'material-ui/Chip';
import red from 'material-ui/colors/red';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  
const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,

    },
    button: {
        margin: theme.spacing.unit,
        float: 'right',
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
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
    header: {
        backgroundColor: 'orange',
    },
    cardTitle: {
        color: 'white',
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
      formControl: {
          marginBottom: 30,
      }
  });
  
  const rootRef = app.database().ref()
  const articleRef = rootRef.child('articles');
  const categoryRef = rootRef.child('categories')

  class Contribute extends Component {
	constructor(props) {
        super(props)
        this.submitArticle = this.submitArticle.bind(this)
		this.state = {
            redirect: false,
            editorState: '',
            title: '',
            category: [],
            article: {
                categories: '',
                media: {
                    image: {
                        id: {
                            src: 'https://images.pexels.com/photos/713668/pexels-photo-713668.jpeg'
                        }
                    }
                }
              }
        }
    }


    // article title
    handleChange = event => {
        const title = event.target.value
        this.setState({
            title: title
        }  
        )};
    

    handleCategorySelect = category => event => {
        const value = event.target.value;
        const newCategory = {[value]: true};
        let newCategoryArray = {};

        newCategoryArray = { ...this.state.article.categories, ...newCategory};

        this.setState({cats: newCategoryArray})
        this.setState({article: { ...this.state.article, categories: newCategoryArray} });
       
       
    this.setState({ [category]: event.target.value });
    };

    // editor data
    onClick = () => {
        const data = this.child.passEditorContent() // do stuff
      }

    
    submitArticle(event) {
        event.preventDefault()
        const author = this.props.user.displayName;
        console.log(this.props.user)
        const contributorId = this.props.user.uid;
        const date = new Date().toString();
        const title = this.state.title;
        const url = title.toLowerCase().trim().split(/\s+/).join('-');
        
        // data from editor
        const articleBody = this.child.passEditorContent()

       let newContent = {
            title: title,
            date: date,
            author: author,
            body: articleBody,
            url: url,
            contributors: {
                [contributorId]: true,
            }
        }
        
        let newArticle = {  ...this.state.article, ...newContent}
        console.log(newArticle)
        this.setState({
            article: { ...this.state.article, newArticle}
        })
    
        this.setState({article: newArticle});
        
        articleRef.push(newArticle)
        this.articleForm.reset();
        this.setState({
            redirect: true
        })

    }


    render() {
        const { classes } = this.props;
        const { categories } = this.props
        const categoryId = Object.keys(categories)
        
        if (this.props.authenticated  === false) {
            return <Redirect to='/'/>
        }
        
        if (this.state.redirect === true) {
            return <Redirect to='/articles'/>
        }
        
        return (
            <div className={classes.root}  style={{ padding: 20 }}>
                <Grid container spacing={40}>
                    <Grid item xs={12} sm={8}>
                        <Card className={classes.card}>
                            <CardHeader className={classes.header}
                                title={
                                    <div className={classes.cardTitle}>Contribute</div>
                                }
                                color="primary"                            
                            />

                            <CardContent>
                                <form onSubmit={(event) => { this.submitArticle(event) }} ref={(form) => { this.articleForm = form}}>
                                    <FormControl fullWidth className={classes.formControl}>
                                        <InputLabel htmlFor="title">Article Title</InputLabel>
                                        <Input
                                            id="title"
                                            value={this.state.article.title}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                    <FormLabel component="legend">Category</FormLabel>
                                    <FormGroup row>
                                    {
                                        categoryId.map((id, index) => {
                                            const articleCat = categories[id]
                                            return (
                                        <FormControlLabel key={index}
                                            control={
                                                <Checkbox
                                                checked={this.state.checkedA}
                                                value={id}
                                                onChange={this.handleCategorySelect("articleCat.name")}
                                                />
                                            }
                                            label={articleCat.name}
                                            />
                                            )
                                        })
                                    }
                                    </FormGroup>
                                    
                                    <Input
                                        id="fileButton"
                                        type="file"
                                        lagel="fs"
                                        defaultValue="upload"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                    
                                    <Button className={classes.button} raised color="default">
                                   
                                        Upload
                                        <FileUpload className={classes.rightIcon} 
                                        />
                                    </Button>
                                    <MyEditor  onRef={ref => (this.child = ref)} />
                                    <Button className={classes.button} raised color="primary" type="submit">
                                        Send
                                        <Send className={classes.rightIcon} />
                                    </Button>
                            </form>
                                
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

Contribute.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Contribute);

