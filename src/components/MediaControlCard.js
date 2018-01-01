import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import PauseIcon from 'material-ui-icons/Pause';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import faiz_baloch from '../media/faiz_baloch.mp3'

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '40%',
    marginLeft: 'auto', // fixes right space
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 4,
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

class MediaControlCard extends Component {
  constructor(props) {
    super(props)
    this.playSong = this.playSong.bind(this)
    this.state = {
      playing: false,

    }
  }
  

  
  playSong = () => {
    const song = document.getElementById('myAudio')
    if(this.state.playing) {
      this.setState({
        playing: false,
      })
      song.pause()
      
    } else {
      this.setState({
        playing: true,
      })
      song.play()
  }
}

  render() {
    const { classes, theme } = this.props;
    const song = faiz_baloch;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="subheading">Sounds of Balochistan</Typography>
            <Typography type="subheading" color="secondary">
              Nako Faizuk
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              {
                this.state.playing 
                ?
                <PauseIcon className={classes.playIcon} onClick={this.playSong}/>
                :
              
              <PlayArrowIcon className={classes.playIcon} onClick={this.playSong}/>
            }
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div>
          <audio id="myAudio">
            <source src={song} type="audio/mp3"/>
            </audio>
        </div>
        <CardMedia
          className={classes.cover}
          image="http://www.dostpakistan.pk/wp-content/uploads/2012/11/baloch-singer-profile.jpg"
          title="Faiz Baloch"
        />
      </Card>
    </div>
  );
}
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);