import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TitlebarGridList from './TitlebarGridList'
import MediaCard from './MediaCard';
import SimpleCard from './SimpleCard';
import { FaBook, FaHistory, FaTree, FaApple, FaBank } from 'react-icons/lib/fa';

const styles = theme => ({
	root: {

	}
})
class MidRow extends Component {

    render() {
	  const { classes } = this.props;
	  const { articles } = this.props;
        return (
			
			<div style={{ padding: 20 }}>
				<Grid container spacing={40}>
					<Grid item xs={12} sm={6}>
						<TitlebarGridList />
					</Grid>
					<Grid item xs={12} sm={3}>
						<MediaCard articles={articles}/>
					</Grid>
						<Grid item xs={12} sm={3}>
							<SimpleCard/>	
						</Grid>
					
				</Grid>
				

				
      </div>
        );
    }
}

MidRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MidRow);