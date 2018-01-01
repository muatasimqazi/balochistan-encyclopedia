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

// import ContributeEditor from './ContributeEditor'
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
              },
              contentState: {},
              image: ''
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
       
       
    // this.setState({ [category]: event.target.value });
    };

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
        const articleBody = this.state.contentState;//this.child.passEditorContent()

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


    onContentStateChange = (contentState) => {
        if (this.refs.editor) {
        this.setState({
          contentState,
        });
        }
      };

    // image upload 
  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
        const destinationRef = storageRef.ref('images/' + file.name )
        destinationRef.put(file)
          resolve();
        })
       
        .then(function(snapshot) {
            // console.log('Uploaded an array!');
          })
       .catch(() => {
          console.log('err')
       });
        
  }


    render() {
        const { classes } = this.props;
        const { categories } = this.props
        const categoryId = Object.keys(categories)

        const { contentState } = this.state;
        
        
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
                        <form onSubmit={(event) => { this.submitArticle(event) }} ref={(form) => { this.articleForm = form}}>
                            <CardContent>
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
                                   
                                
                                    <Editor 
                                        ref="editor"
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        onContentStateChange={this.onContentStateChange}
                                        toolbar={{
                                            inline: { inDropdown: false },
                                            list: { inDropdown: true },
                                            textAlign: { inDropdown: true },
                                            link: { inDropdown: true },
                                            history: { inDropdown: true },
                                            image: {
                                                // icon: image,
                                                className: undefined,
                                                component: undefined,
                                                popupClassName: undefined,
                                                urlEnabled: true,
                                                uploadEnabled: true,
                                                alignmentEnabled: true,
                                                uploadCallback: this.uploadImageCallBack,
                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                alt: { present: true, mandatory: false },
                                                defaultSize: {
                                                  height: 'auto',
                                                  width: 'auto',
                                                },
                                              },
                                            // image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                                        }}
                                    />                              
                            </CardContent>
                            <CardActions>
                                <Button className={classes.button} raised type="submit" align="right">
                                Publish
                                <Send className={classes.rightIcon} />
                                </Button>
                            </CardActions>
                            </form>
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

