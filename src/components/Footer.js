import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
    root: {
      padding: 16,
      marginTop: theme.spacing.unit * 3,
      background: '#2c2c2c',
      color: '#ffff'
    },
    paper: {
        background: '#2c2c2c',
        color: '#ffff',
        margin: 30,
    },
    list: {
        color: '#ffff',
    }

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
                <div className={classes.root}>
            <Grid container spacing={24}>
            <Grid item xs={12} sm={8}>
            <Paper className={classes.paper} elevation={0}>
            <Typography type="title" className={classes.title}>
              Text only
            </Typography>
            <div>
              <List>
                <ListItem button>
                <ListItemText
                    primary="Single-line item"
                />
                </ListItem>
                <ListItem button>
                <ListItemText
                    primary="Single-line item"
                />
                </ListItem>
                <ListItem button>
                <ListItemText
                    primary="Single-line item"
                />
                </ListItem>
                <ListItem button>
                <ListItemText
                    primary="Single-line item"
                />
                </ListItem>
              </List>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} elevation={0}>xs=12 sm=6</Paper>
          </Grid>
          
            <Grid item xs={12}>
                <div className="copyright" style={{textAlign: 'right'}}>
                        &copy; {this.state.year}, Designed and Coded by
                        <a href="" target="_blank"> Q. Creatives</a>.
                </div>
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