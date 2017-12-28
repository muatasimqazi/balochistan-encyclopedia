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
        return (
        <div className={classes.root}>
          <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={one}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
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
            <Typography className={classes.title}>Fact of the Day</Typography>
            <Typography type="headline" component="h2">
              benevolent
            </Typography>
          
            <Typography component="p">
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense>Learn More</Button>
          </CardActions>
            </Card>

            <Divider light />

            <Card className={classes.cardSmall}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography  type="subheading" noWrap>Live From Space</Typography>
                  <Typography color="secondary" noWrap>
                    Mac Miller
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={three}
                title="Live from space album cover"
              />
            </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
            <Card className={classes.card} style={{marginBottom: 20}}>
            <CardContent>
            <Typography type="title" className={classes.title}>
              Latest Additions
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

TopRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopRow);