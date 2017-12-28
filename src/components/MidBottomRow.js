import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import one from '../img/one.jpeg'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  card: {

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


class MidBottomRow extends Component {
    render() {
      const { classes } = this.props;
        return (
        <div className={classes.root} style={{ padding: 20 }}>
			<Typography type="headline" component="h2" style={{padding: 10}}>
					Explore Balochistan
			</Typography>

          <Grid container spacing={40}>
          <Grid item xs={12} sm={4}>
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
		  <Grid item xs={12} sm={4}>
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
		  <Grid item xs={12} sm={4}>
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
          </Grid>
      </div>
        );
    }
}

MidBottomRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MidBottomRow);