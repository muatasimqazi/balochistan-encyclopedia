import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import one from '../img/one.jpeg';
import MediaCard from './MediaCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#fafbfc !important'
  },

  cardTitle: {
    
  },
  media: {
    height: 200,
  },
  mediaSmall: {
    height: 150,
  },
  cardSmall: {
    display: 'flex',
    marginBottom: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
    flex: 2,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function BottomTopRow(props) {
      const { classes } = props;
      const { articles } = props;
        return (
        <div className={classes.root} style={{ padding: 20 }}>
            <Typography type="headline" component="h2" style={{marginBottom: 20, fontFamily: 'Roboto'}}>
                Explore Balochistan
            </Typography>
          <Grid container spacing={24}>
            {
              articles.map((article, index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <MediaCard articles={article} category={article.category}/>
                  </Grid>
                  )
              })
            }
          </Grid>
        </div>
        );
}

BottomTopRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomTopRow);