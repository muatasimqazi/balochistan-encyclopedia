import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
    paper: {
      padding: 16,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Profile extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                                Profile
                        
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Profile);