import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


import {  FaBook, FaHistory, FaTree, FaApple, FaBank } from 'react-icons/lib/fa';

const styles = theme => ({
  root: {
    background: '#ffffff !important',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 0,
    marginRight: 0,
    // marginTop: theme.spacing.unit * 3,
  },
  
});


function PaperSheet(props) {
  const { classes } = props;
  const content = props.content;

  return (
    <div className={classes.root} >
      <Paper className={classes.root} elevation={0}>
          {content}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);