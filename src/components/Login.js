// eslint-disable-next-line
import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app, facebookProvider, googleProvider } from '../base';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Button from 'material-ui/Button';

import {FaFacebookOfficial, FaGoogle} from 'react-icons/lib/fa/';
import Snackbar from 'material-ui/Snackbar';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';



function TabContainer({ children, dir }) {
	return (
	  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
		{children}
	  </Typography>
	);
  }
  
  TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired,
  };

const styles = theme => ({
  form: {
	backgroundColor: theme.palette.background.paper,
  },
  social: {
	 textAlign: 'center',
	 textTransform: 'capitalize',
	 margin: '20px 5px',
	 width: 300,
	},
	button: {
		width: '100%'
	}
});

class Login extends Component {
	constructor(props) {
		super(props)
		this.authWithFacebook = this.authWithFacebook.bind(this)
		this.authWithGoogle = this.authWithGoogle.bind(this)
		this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
		this.state = {
			open: false,
			value: 0,
			userFullName: '',
			email: '',
			password: '',
			showPassword: false,
			isError: false,
			message: ''
		}
	}

	handleChange = (event, value) => {
		this.setState({ value });
	  };
	
	handleChangeIndex = index => {
	this.setState({ value: index });
	};

	handleMouseDownPassword = event => {
	event.preventDefault();
	};

	handleClickShowPasssword = () => {
	this.setState({ showPassword: !this.state.showPassword });
	};

	// Snackbar
	handleClose = () => {
	this.setState({ open: false });
	};

	authWithFacebook() {
		app.auth().signInWithPopup(facebookProvider)
		.then((result, error) => {
			if (error) {
				console.log("unable to sign in with Facebook")
			} else { 
				this.setState({ 
					redirect: true,
					open: false,
				})
			}
		})
		.catch((error) => {
			this.setState({
				isError: true,
				message: error
			})
		});
	}

authWithGoogle() {
	app.auth().signInWithPopup(googleProvider)
		.then((result, error) => {
			if (error) {
				console.log("unable to sign in with Google")
			} else { 
				this.setState({ 
					redirect: true,
					open: false,
				})
			}
		})
		.catch((error) => {
			this.setState({
				isError: true,
				message: error
			})
		});
}

	authWithEmailPassword(event) {
		event.preventDefault()
		const email = this.state.email
		const password = this.state.password
		const displayName = this.state.userFullName
		if (!email || !password) {
			let errorMessage = !email ? "Email" : "Password"
			if (!displayName) {
				errorMessage = "Name field"
			}
			this.setState({
				isError: true,
				message: errorMessage + " cannot be left blank."
			})
			this.loginForm.reset();
			return;
		}

		app.auth().fetchProvidersForEmail(email)
		.then((providers) => {
			if(providers.length === 0) {
				// create user
				return app.auth().createUserWithEmailAndPassword(email, password)

			} else if (providers.indexOf("password") === -1) {
				// they used facebook
				this.loginForm.reset();
				this.setState({
					isError: true,
					message: "Email already in use. Try an alternative login."
				})
			} else {
				// sign the user in
				this.loginForm.reset()
				return app.auth().signInWithEmailAndPassword(email, password)
			}

		})
		.then((user) => {
			if (user && user.email) {
				this.loginForm.reset()
				if (displayName) {
				user.updateProfile({displayName: displayName})
				}
				this.setState({
					open: true
				})
			}
			
		})
		.catch((error) => {
			this.setState({
				isError: true,
				message: error
			})
		})
	}
	
  render() {
		const { classes, theme } = this.props;
		const { isError, message } = this.state;
		const { fullScreen } = this.props;
		let { openDialog } = this.props;

		if (this.props.authenticated  === true) {
			openDialog = false;
		}

    return (
			<div className={classes.root}>
				<Dialog
					open={openDialog}
					onClose={this.props.handleDialogClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar position="static" color="default">
						<DialogTitle id="responsive-dialog-title" style={{paddingBottom: 0}}>
							<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							fullWidth
							>
								<Tab label="Log In" />
								<Tab label="Sign Up" />

							</Tabs>
						</DialogTitle>
					</AppBar>

					<DialogContent>
						<div style={{display: 'flex'}}>
							<Button color="contrast" className={classes.social} style={{background: '#3b5998'}} onClick={() => { this.authWithFacebook() }}>
								<FaFacebookOfficial color="white" size={30} style={{marginRight: 5}}/> Facebook
							</Button>

							<Button color="contrast" className={classes.social} style={{background: '#dc4e41'}} onClick={() => { this.authWithGoogle() }}>
								<FaGoogle color="white" size={30} style={{marginRight: 5}}/> Google
							</Button>
						</div>

					<Divider light style={{marginBottom: 20}} />

					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={this.state.value}
						onChangeIndex={this.handleChangeIndex}
						className={classes.form}
					>
						<TabContainer dir={theme.direction}>

							<form className="form" onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form}}>
								<FormControl fullWidth className={classes.formControl}>
									<InputLabel htmlFor="email">Email</InputLabel>
									<Input
									id="email"
									autoComplete="true"
									value={this.state.email}
									onChange={(event) => this.setState({email: event.target.value})}
									required
									/>
								</FormControl>

								<FormControl fullWidth className={classes.formControl}>
									<InputLabel htmlFor="password">Password</InputLabel>
									<Input
										id="password"
										autoComplete="true"
										type={this.state.showPassword ? 'text' : 'password'}
										value={this.state.password}
										onChange={(event) => this.setState({password: event.target.value})}
										endAdornment={
										<InputAdornment position="end">
										<IconButton
										onClick={this.handleClickShowPasssword}
										onMouseDown={this.handleMouseDownPassword}
										>
										{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
										</InputAdornment>
										}
										required
									/>
								</FormControl>

								<div style={{marginTop: 30}}>
									<Button raised color="primary" type="submit" className={classes.button}>
										Login
									</Button>
								</div>
							</form>
						</TabContainer>
					
						<TabContainer dir={theme.direction}>

							<form className="form" onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form}}>
								<FormControl fullWidth className={classes.formControl}>
									<InputLabel htmlFor="fullname">Full Name</InputLabel>
									<Input
										id="fullname"
										autoComplete="true"
										value={this.state.userFullName}
										onChange={(event) => this.setState({userFullName: event.target.value})}
										required
									/>
								</FormControl>

								<FormControl fullWidth className={classes.formControl}>
									<InputLabel htmlFor="useremail">Email</InputLabel>
									<Input
										id="useremail"
										autoComplete="true"
										value={this.state.email}
										onChange={(event) => this.setState({email: event.target.value})}
										required
									/>
								</FormControl>

								<FormControl fullWidth className={classes.formControl}>
									<InputLabel htmlFor="userpassword">Password</InputLabel>
									<Input
										id="userpassword"
										autoComplete="true"
										type={this.state.showPassword ? 'text' : 'password'}
										value={this.state.password}
										onChange={(event) => this.setState({password: event.target.value})}
										endAdornment={
										<InputAdornment position="end">
										<IconButton
										onClick={this.handleClickShowPasssword}
										onMouseDown={this.handleMouseDownPassword}
										>
										{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
										</InputAdornment>
										}
										required
									/>
								</FormControl>

								<div style={{marginTop: 30}}>
									<Button raised color="primary" type="submit" className={classes.button}>
										Sign Up
									</Button>
								</div>
							</form>
						</TabContainer>

					</SwipeableViews>

					{isError ? 
						<Snackbar
							anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
							open={true}
							onClose={this.handleClose}
							SnackbarContentProps={{
							'aria-describedby': 'message-id',
							}}
							message={<span id="message-id">{`${message}`}</span>}
						/>
					: null}

					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.handleDialogClose} color="primary" autoFocus>
								Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);


