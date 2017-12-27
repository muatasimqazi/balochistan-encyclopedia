// eslint-disable-next-line
import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app, facebookProvider } from '../base';
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

import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import Snackbar from 'material-ui/Snackbar';



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
  root: {
	maxWidth: 400,
	minWidth: 100,
	margin: '0 auto',
	marginTop: '5%'
  },
  form: {
	backgroundColor: theme.palette.background.paper,
  },
  social: {
	 textAlign: 'center',
	 marginTop: 20, 
	 marginBottom: 20,
	 padding: 5,
	 background: '#3b5998'
  }
});

class Login extends Component {
	constructor(props) {
		super(props)
		this.authWithFacebook = this.authWithFacebook.bind(this)
		this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
		this.state = {
			redirect: false,
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
				this.setState({ redirect: true })
			}
		})
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
					redirect: true
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

	if (this.state.redirect === true) {
		return <Redirect to='/'/>
	}

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
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
        </AppBar>
		<Paper className={classes.social}>
		<Button color="contrast" onClick={() => { this.authWithFacebook() }}>
		<FaFacebookOfficial size={30} color='white' style={{marginRight: 10}}/> Facebook
		</Button>
		</Paper>
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
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);


