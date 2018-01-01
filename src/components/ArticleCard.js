import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
  card: {
  },
  media: {
    height: 250,
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
  },
  caption: {
      marginLeft: 20,
      marginTop: 10,
  }
};

function ArticleCard(props) {
  const { classes } = props;
  const { article } = props;
  const { options } = props;
  return (
    <div>
      <Card className={classes.card}> 
            <div className={classes.mediaContainer}>
                <CardMedia
                    className={classes.media}
                    image={article.body.entityMap[0].data.src}
                    title="Contemplative Reptile"
                />
                <div className={classes.chip}>
                    <Chip label="Basic Chip" className={classes.chip} /> 
                </div>
                <Typography type="caption" gutterBottom className={classes.caption}>
                    Fireworks explode over Sydney Harbour during New Year's Eve celebrations in Sydney, Australia, Sunday, Dec. 31, 2017.
                </Typography>
            </div>
            <CardContent>
                <Typography type="headline" component="h2">
                    {article.title}
                </Typography>
            <CardHeader
                avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                    <Chip label="Basic Chip" className={classes.chip} />
                
                }
                title={article.author}
                subheader= {new Intl.DateTimeFormat('en-US', options).format(new Date(article.date))}
            />
            
                {article.body.blocks.map((para, index) => {      
                            return (
                            <Typography type="body1" gutterBottom key={index}>
                            {para.text}
                
                            </Typography>
                                
                            )
                        })}
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

ArticleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleCard);