import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import PaperSheet from './PaperSheet';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import SingleLineGridList from './SingleLineGridList';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    // marginTop: theme.spacing.unit * 3,
  }),
  title: {
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'normal',
    fontSize: '1.2rem',
  }
});

function BottomRow(props) {
        const { classes } = props;
        return (
                <PaperSheet content={
                    <div className={classes.root} style={{ padding: 20 }}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6} className={classes.card}>
                        <div>
                        <Paper className={classes.root} elevation={0} style={{background: 'white', color: 'black', marginBottom: 30}} square={true}>
                            <Typography type="headline" component="h2" className={classes.title}>
                            Adding New Content to Balochistan Encyclopedia
                            </Typography>
                            <Typography component="p" style={{ color: 'black'}}>
                            Balochistan Encyclopedia is a crowd-sourced project that aims to document Balochistan's culture, history, language, etc. If you'd like to contribute, please create an account and submit a proposal on what you would like to write about.
                            </Typography>
                        </Paper>
                    
                        </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <SingleLineGridList/>
                        </Grid>
                    </Grid>
                    </div>
                }
                />

        );
}

BottomRow.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(BottomRow);
