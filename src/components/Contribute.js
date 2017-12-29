import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app } from '../base';
import MyEditor from './MyEditor'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import FileUpload from 'material-ui-icons/FileUpload';
import Send from 'material-ui-icons/Send';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormGroup, FormControlLabel, FormLabel} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import red from 'material-ui/colors/red';
import { LinearProgress } from 'material-ui/Progress';

import ContributeEditor from './ContributeEditor'

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

  // create a storage ref
  const storageRef =app.storage()
  let file;

  class Contribute extends Component {
	constructor(props) {
        super(props)
        this.submitArticle = this.submitArticle.bind(this)
		this.state = {
            redirect: false,
            completed: 0,
            editorState: '',
            title: '',
            category: [],
            file: {},
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

    handleUpload = event => {
       file = event.target.files[0]
        this.setState({
            file: file
        })
        console.log(this.state.file)
        
    }
    // editor data
    onClick = () => {
        const data = this.child.passEditorContent() // do stuff
      }

    uploadFile = () => {
       
        const destinationRef = storageRef.ref('images/' + file.name )
        console.log(file)
        var task = destinationRef.put(file)

        task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           
        },
        function error(err) {
            console.log(err)
        },
        function complete() {
        }
    )

    }
    submitArticle(event) {
        event.preventDefault()
        const author = this.props.user.displayName;
        console.log(this.props.user)
        const contributorId = this.props.user.uid;
        const date = new Date().toString();
        const title = this.state.title;
        const url = title.toLowerCase().trim().split(/\s+/).join('-');
        var forestRef = app.storage().ref().child('images/globalist_profile.jpg')
        console.log(forestRef.fullPath)
        
        // data from editor
        const articleBody = this.child.passEditorContent()

       let newContent = {
            title: title,
            date: date,
            author: author,
            body: articleBody,
            url: url,
            image: "https://www.fnord23.com/wp-content/uploads/2017/12/Cwo-EZ-WEAAt_lW.jpg",
            media: {
                images: [
                    ],
            },
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
                                    
                                    
                                    <br/>
                                    {/* <LinearProgress mode="determinate" value={this.state.completed} /> */}
                                    
                                    <ContributeEditor/> 
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

