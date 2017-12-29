import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import one from '../img/one.jpeg';
import MediaCard from './MediaCard';
import PaperSheet from './PaperSheet';
import { FaBook, FaHistory, FaTree, FaApple, FaBank } from 'react-icons/lib/fa';

const styles = theme => ({
  root: {
    background: '#fafbfc !important',
    marginTop: 30,
    marginBottom: 30,
  },
  link: {
    fontFamily: 'Roboto, sans-serif',
  }

});


const icons = [
  {
    icon: FaBook,
    title: "Geography"
  },
  {
    icon: FaHistory,
    title: "History"
  },
  {
    icon: FaBook,
    title: "Arts"
  },
  {
    icon: FaApple,
    title: "Literature"
  },
  {
    icon: FaBook,
    title: "Culture"
  },
  {
    icon: FaBank,
    title: "Politics"
  },

]

class MidBottomRow extends Component {
    render() {
      const { classes } = this.props;
        return (
          <div className={classes.root} style={{ padding: 20 }}>
            <PaperSheet content={
               <Grid container spacing={24}>
               {
                icons.map(icon=> (
                <Grid item xs={4} sm={2} style={{textAlign: 'center'}} key={icon.title}>
                  <icon.icon size={75} color='grey'/>
                  <Typography type="headline" component="h3" className={classes.link}>
                  <Button component={Link} to={`category/${icon.title.toLowerCase()}`} className={classes.button}>
                  {icon.title}
                  </Button>
                </Typography>
              </Grid>
              ))
            }
              </Grid>
              }
            />
          </div>
        );
    }
}

MidBottomRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MidBottomRow);