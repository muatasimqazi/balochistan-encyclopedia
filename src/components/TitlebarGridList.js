import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import ShareIcon from 'material-ui-icons/Share';
import Button from 'material-ui/Button';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * */
 const tileData = [
   {
     img: 'https://material-ui-next.com/static/images/grid-list/morning.jpg',
     title: 'Image',
     author: 'author',
   },
   {
    img: 'https://media1.britannica.com/eb-media/21/183421-131-2F9E715E.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://media1.britannica.com/eb-media/65/104265-004-AC2A536B.jpg',
    title: 'Image',
    author: 'author',
  },
   {
    img: 'https://media1.britannica.com/eb-media/80/140480-118-2BB2DFB1.jpg',
    title: 'Image',
    author: 'author',
  },
 ];
 
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} component={Link} to="/article">
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);