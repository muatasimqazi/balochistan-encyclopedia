import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

const styles = {
  card: {
  },
  media: {
    height: 200,
  },
  mediaContainer: {
      position: 'relative',
  },
  chip: {
      position: 'absolute',
      top: 4,
      right: 4,
      background: '#0096887a',
      color: 'white'
  }
};

function MediaCard(props) {
  const { classes } = props;
  const { articles } = props;
  return (
    <div>
      <Card className={classes.card}> 
            <div className={classes.mediaContainer}>
            <CardMedia
                className={classes.media}
                image={articles.media}
                title="Contemplative Reptile"
                />
            <div className={classes.chip}>
            <Chip label="Basic Chip" className={classes.chip} /> 
            </div>
                </div>
        <CardContent>
          <Typography type="headline" component="h2">
          
            {articles.title}
          </Typography>
          <Typography component="p">
            {articles.text}
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
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);