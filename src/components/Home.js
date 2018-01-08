import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TopRow from './TopRow'
import MidRow from './MidRow'
import TopBottomRow from './TopBottomRow'
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
  media: 'http://www.pakistaneconomist.com/wp-content/uploads/2017/05/How-Gwadar-port-will-catalyze-development-in-Balochistan.jpg',
  text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
}
const articles = [
  {
    title: 'Featured Article Published Today',
    media: 'http://www.pakistantoursguide.pk/wp-content/uploads/2015/07/Photos-of-Gawadar-Balochistan-A-picturesque-view-of-Gwadar-Coastline-Pictures-of-Gawadar-Balochista.gif',
    text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
    author: 'Sample Author',
    category: {
      name: 'Balochistan',
      color: 'green'
    }
  },
  {
    title: 'Latest Post',
    media: 'http://www.pakvoices.pk/wp-content/uploads/2015/05/sui-gas.jpg',
    text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
    author: 'Sample Author',
    category: {
      name: 'Geography',
      color: 'red'
    }
  },
  {
    title: 'Mekran Coast Highway',
    media: 'https://c1.staticflickr.com/5/4097/4747354632_d2a1cc177d_b.jpg',
    text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
    author: 'Sample Author',
    category: {
      name: 'History',
      color: 'teal'
    }
  },
  {
    title: 'Hanna Lake',
    media: 'https://travel.jumia.com/blog/pk/wp-content/uploads/2016/01/Hanna-Lake.png',
    text: 'Down on the West Coast where the sand meets the crashing waves and your dreams come true.',
    author: 'Sample Author',
    category: {
      name: 'People',
      color: 'orange'
    }
  },

]

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.roots}>
          <TopRow articles={articles[0]}/>
          <TopBottomRow />
          <MidRow articles={articles}/>
          <BottomTopRow articles={articles}/>
          <BottomRow/>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);