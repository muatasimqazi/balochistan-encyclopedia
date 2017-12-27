import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

function Spinner(props) {
  const { classes } = props;
  return (
    <div>
      
      <CircularProgress className={classes.progress} size={50} />
      
    </div>
  );
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spinner);