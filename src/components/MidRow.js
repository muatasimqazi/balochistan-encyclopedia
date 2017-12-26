import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper'
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


import { FaBook, FaHistory, FaTree, FaEducation, FaBank } from 'react-icons/lib/fa';

import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import five from '../img/five.jpeg';


const styles = theme => ({
  root: {
    flexGrow: 1,
	marginTop: 30,
	textAlign: 'center'
  },
  inner: {
	  padding: 30
  },
  border: {
	borderLeft: '1px solid #e9ecef',
  }
});




class MidRow extends Component {
	static childContextTypes = {
        reactIconBase: PropTypes.object
    };

    getChildContext() {
        return {
            reactIconBase: {
                color: '#868e96',
                size: 100,
                style: {
                   
                }
            }
        }
    }
    render() {
      const { classes } = this.props;
        return (
			
        <div className={classes.root}>
		<Paper elevation={0}>

		 <Grid container spacing={24} className={classes.inner}>
		 <Grid item xs={6} sm={2}>
		 <Paper className={classes.paper} elevation={0}>
		 <FaBook />
		 </Paper>
		 <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
	   </Grid>
	   <Grid item xs={6} sm={2} className={classes.border}>
		 <Paper className={classes.paper} elevation={0}>
		 <FaHistory />
		 </Paper>
		 <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
	   </Grid>
	   <Grid item xs={6} sm={2} className={classes.border}>
		 <Paper className={classes.paper} elevation={0}>
		 <FaHistory />
		 </Paper>
		 <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
	   </Grid>
	   <Grid item xs={6} sm={2} className={classes.border}>
		 <Paper className={classes.paper} elevation={0}>
		 <FaHistory />
		 </Paper>
		 <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
	   </Grid>
	   <Grid item xs={6} sm={2} className={classes.border}>
		 <Paper className={classes.paper} elevation={0}>
		 <FaHistory />
		 </Paper>
		 <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
	   </Grid>
	   <Grid item xs={6} sm={2} className={classes.border}>
		 <Paper className={classes.paper} elevation={0}>
		 <FaHistory />
		 </Paper>
		 <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
	   </Grid>
		</Grid>
		</Paper>
      </div>
        );
    }
}

MidRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MidRow);