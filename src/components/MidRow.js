import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { FaBook, FaHistory, FaTree, FaApple, FaBank } from 'react-icons/lib/fa';

const styles = theme => ({
  root: {
    flexGrow: 1,
		marginTop: 30,
		marginBottom: 30,
		textAlign: 'center'
  },
  inner: {
	  padding: 50
  },
  border: {
		borderLeft: '1px solid #e9ecef',
  }
});

class MidRow extends Component {
	static childContextTypes = {
        reactIconBase: PropTypes.object
    };

    getChildContext() {
        return {
            reactIconBase: {
                color: '#868e96',
                size: 100,
                style: {
                   
                }
            }
        }
    }
    render() {
      const { classes } = this.props;
        return (
			
        <div className={classes.root}>
				<Paper elevation={0}>
					<Grid container spacing={24} className={classes.inner}>
						<Grid item xs={6} sm={2}>
							<Paper className={classes.paper} elevation={0}>
								<FaBook />
							</Paper>
							<Button href="#flat-buttons" className={classes.button}>
								Link
							</Button>
						</Grid>
						<Grid item xs={6} sm={2} className={classes.border}>
							<Paper className={classes.paper} elevation={0}>
								<FaBank />
							</Paper>
							<Button href="#flat-buttons" className={classes.button}>
									Link
								</Button>
						</Grid>
						<Grid item xs={6} sm={2} className={classes.border}>
							<Paper className={classes.paper} elevation={0}>
								<FaHistory />
							</Paper>
							<Button href="#flat-buttons" className={classes.button}>
									Link
							</Button>
						</Grid>
						<Grid item xs={6} sm={2} className={classes.border}>
							<Paper className={classes.paper} elevation={0}>
								<FaTree />
							</Paper>
							<Button href="#flat-buttons" className={classes.button}>
									Link
							</Button>
						</Grid>
					<Grid item xs={6} sm={2} className={classes.border}>
						<Paper className={classes.paper} elevation={0}>
							<FaHistory />
						</Paper>
						<Button href="#flat-buttons" className={classes.button}>
								Link
							</Button>
						</Grid>
						<Grid item xs={6} sm={2} className={classes.border}>
								<Paper className={classes.paper} elevation={0}>
									<FaApple />
								</Paper>
								<Button href="#flat-buttons" className={classes.button}>
									Link
								</Button>
						</Grid>
					</Grid>
				</Paper>
      </div>
        );
    }
}

MidRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MidRow);