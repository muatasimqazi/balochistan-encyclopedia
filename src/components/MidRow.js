import React from 'react';
import Grid from 'material-ui/Grid';
import TitlebarGridList from './TitlebarGridList'
import MediaCard from './MediaCard';
import SimpleCard from './SimpleCard';

function MidRow(props) {
	  const { articles } = props;
        return (
			<div style={{ padding: 20 }}>
				<Grid container spacing={40}>
					<Grid item xs={12} sm={7} md={6}>
						<TitlebarGridList />
					</Grid>
					<Grid item xs={12} sm={5} md={3}>
						<MediaCard articles={articles}/>
					</Grid>
						<Grid item xs={12} sm={12} md={3}>
							<SimpleCard/>	
						</Grid>
				</Grid>
			</div>
		);
}

export default MidRow;