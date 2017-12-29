import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TopRow from './TopRow'
import MidRow from './MidRow'
import MidBottomRow from './MidBottomRow'
import BottomTopRow from './BottomTopRow'
import BottomRow from './BottomRow'
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

const content = {
  title: 'Card Title',
  media: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg',
  text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
}

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.roots}>
          <TopRow articles={content}/>
          <MidBottomRow />
          <MidRow articles={content}/>
          <BottomTopRow articles={content}/>
          <BottomRow/>
      
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);