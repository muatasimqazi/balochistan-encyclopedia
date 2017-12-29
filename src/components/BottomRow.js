import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import two from '../img/two.jpeg';
import five from '../img/five.jpeg';
import PaperSheet from './PaperSheet';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography';
import SingleLineGridList from './SingleLineGridList'
import SimpleCard from './SimpleCard';



const styles = theme => ({
    card: {
    //  minHeight: 143,
    },
    media: {
    //   height: 194,   
    },
});

const messageCard = [
    {
        text: "afafa",
        color: 'green',
    },

]
class BottomRow extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} style={{ padding: 20 }}>
           
                <PaperSheet content={
               <Grid container spacing={40}>            
                <Grid item xs={12} sm={6}>
                {
                messageCard.map(card => (
                 <div key={card.text} className={classes.card} style={{background: card.color}}>
                  <SimpleCard />
             </div>
              ))
            }    
              </Grid>
              <Grid item xs={12} sm={6}>
              <SimpleCard/>
              </Grid>
            
            </Grid>
              }
              />
              
			</div>
        );
    }
}

BottomRow.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(BottomRow);