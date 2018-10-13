import React from 'react';
import Grid from 'material-ui/Grid';
import TitlebarGridList from './TitlebarGridList'
import MediaCard from './MediaCard';
import InteractiveList from './InteractiveList';

function MidRow(props) {
	  const { articles } = props;
        return (
			<div style={{ padding: 20 }}>
				<Grid container spacing={40}>
					<Grid item xs={12} sm={12} md={6}>
					<InteractiveList label={`Latest Articles`} />
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TitlebarGridList articles={articles}/>
					</Grid>
				</Grid>
			</div>
		);
}

export default MidRow;
