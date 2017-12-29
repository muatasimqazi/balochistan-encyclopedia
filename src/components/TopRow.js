import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
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
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import five from '../img/five.jpeg';
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
  card: {

  },
  media: {
    height: 300,
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
    minWidth: 100,
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


class TopRow extends Component {
    render() {
      const { classes } = this.props;
      const { articles } = this.props;
        return (
        <div className={classes.root}>
          <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <MediaCard articles={articles}/>
          </Grid>
          
            <Grid item xs={12} sm={3}>
            <div>
              <div style={{marginBottom: 30}}>
                <SimpleCard/>
              </div>
            <MediaControlCard />
            </div>
            </Grid>

            <Grid item xs={12} sm={3}>
                <div>
                <InteractiveList />
                </div>
            </Grid>
          </Grid>
      </div>
        );
    }
}

TopRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopRow);