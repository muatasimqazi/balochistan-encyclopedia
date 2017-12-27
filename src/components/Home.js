import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TopRow from './TopRow'
import MidRow from './MidRow'
import MidBottomRow from './MidBottomRow'

const styles = theme => ({
  root: {
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.roots}>
          <TopRow/>
          <MidRow />
          <div style={{background: '#ebeeef', marginTop: 30, paddingBottom: 30}}>
          <MidBottomRow />
        </div>
      
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);