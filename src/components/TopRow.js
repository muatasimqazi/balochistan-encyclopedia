import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MediaControlCard from './MediaControlCard';
import MediaCard from './MediaCard';
import SimpleCard from './SimpleCard';
import InteractiveList from './InteractiveList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
});

function TopRow (props) {
      const { classes } = props;
      const { articles } = props;
        return (
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={7} md={6}>
                <MediaCard articles={articles} label={`Featured Article`}/>
              </Grid>

              <Grid item xs={12} sm={5} md={3}>
                <div>
                  <div style={{marginBottom: 30}}>
                  <SimpleCard heading={"Fact of the Day"} title="Sokhta Koh" content="A Harappan site on the Mekran coast that dates back to the Mature Harappan period (2600-1900 BC)."/>
                  </div>
                  <MediaControlCard/>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <div>
                  <SimpleCard heading={"Fun Fact"} title="Shalkot" content="is the former name of Quetta, Balochistan capital"/>
                </div>
              </Grid>
            </Grid>
          </div>
        );
}

export default withStyles(styles)(TopRow);
