import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TopRow from './TopRow'
import MidRow from './MidRow'
import TopBottomRow from './TopBottomRow'
import BottomTopRow from './BottomTopRow'
import BottomRow from './BottomRow';
import TimelineCustom from './TimelineCustom'
import { articles } from '../constants'

const styles = theme => ({
  root: {
    marginTop: 30,
    height: 200,
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
          <TopRow articles={articles[0]}/>
          <TopBottomRow />
          <MidRow articles={articles}/>
          <TimelineCustom/>
          <BottomTopRow articles={articles}/>
          <BottomRow/>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);