import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {FaFacebook, FaTwitter}  from 'react-icons/lib/fa';


const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 3,
      background: '#227AAC',
      color: '#ffff'
    },
    text: {
        fontWeight: 'normal !important',
    },
    item: {
        marginRight: 70,
        marginBottom: 40,
    },
    copyright: {
        background: '#075a8a',
    },
   
    gutters: {
        paddingLeft: 0,
    },
    icon: {
        marginRight: 0
    },
  });

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            year: new Date().getFullYear()
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <footer>
            <div style={{ padding: 20 }}>
                <Grid container className={classes.root} spacing={40}>
                    <Grid item xs={12} sm={12} md={4} className={classes.item}>
                        <Typography type="title" gutterBottom>
                            Balochistan Encyclopedia
                        </Typography>
                        <Typography type="body2" gutterBottom className={classes.text}>
                            Balochistan Encyclopedia is a crowd-sourced online encyclopedia that aims to become an extensive resource on all things Balochistan.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} className={classes.item}>
                        <Typography type="title" gutterBottom>
                                Follow Us
                        </Typography>
                        <List>
                            <ListItem button component="a" href="facebook.com/balochistan-encyclopedia" className={classes.gutters}>
                            <ListItemIcon className={classes.icon}>
                                <FaFacebook size={30} />
                            </ListItemIcon>
                            <ListItemText inset={true} primary="Facebook" />
                            </ListItem>

                            <ListItem button component="a" href="#twitter" className={classes.gutters}>
                            <ListItemIcon className={classes.icon}>
                                <FaTwitter size={30} />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                            </ListItem>
                        </List>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} className={classes.item}>
                        <Typography type="title" gutterBottom>
                        Contribution Policy
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={12} className={classes.copyright}>
                        <Typography type="caption" gutterBottom align="right">
                        &copy; {this.state.year}, Balochistan Encyclopdiea | Designed and Coded by
                                <a href="" target="_blank"> Q. Creatives</a>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);