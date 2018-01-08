import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import ResponsiveDialog from './ResponsiveDialog';

const styles = {
  card: {
    minHeight: 200,
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
      // background: '#F3A346',
      color: 'white'
  }
};

class MediaCard extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

  const { classes } = this.props;
  const { articles } = this.props;
  const { category } = this.props;
  const chipBackground = category ? category.color : '#F3A346';
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
            <Chip label=
							{this.props.label ? this.props.label : category.name}
              className={classes.chip} 
              style={{background: chipBackground}}
              />
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
          <Button dense color="primary" onClick={this.handleClickOpen}>
            Share
          </Button>
          <Button dense color="primary" component={Link} to="/open-collective">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <ResponsiveDialog open={this.state.open} handleClose={this.handleClose}/>
    </div>
  );
}
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
