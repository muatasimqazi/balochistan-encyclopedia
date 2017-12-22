import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app, facebookProvider } from '../base';
import logo from '../logo.svg';

class Login extends Component {
	constructor(props) {
		super(props)
		this.authWithFacebook = this.authWithFacebook.bind(this)
		this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
		this.state = {
			redirect: false
		}
	}

	authWithFacebook() {
		console.log("authed with facebook")
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
		const email = this.emailInput.value;
		const password = this.passwordInput.value;

		app.auth().fetchProvidersForEmail(email)
		.then((providers) => {
			if(providers.length === 0) {
				// create user
				return app.auth().createUserWithEmailAndPassword(email, password)

			} else if (providers.indexOf("password") === -1) {
				// they used facebook
				this.loginForm.reset();
				console.log("Try an alternative login")
			} else {
				// sign the user in
				return app.auth().signInWithEmailAndPassword(email, password)
			}

		})
		.then((user) => {
			if (user && user.email) {
				this.loginForm.reset()
				this.setState({
					redirect: true
				})
			}
		})
		.catch((error) => {
			console.log(error.message)
		})
	}
    render() {
		if (this.state.redirect === true) {
			return <Redirect to='/'/>
		}
		
        return (
			<div>
				<button style={{width: "100%"}} className="btn btn-primary" onClick={() => { this.authWithFacebook() }}>Login with Facebook</button>
				<form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form}}>

				<label className="label">
				Email
				<input style={{width: "100%"}} className="input" name="email" type="email" ref={(input) => {this. emailInput = input}} placeholder="email"></input>
				</label>

				<label className="label">
				Password
				<input style={{width: "100%"}} className="input" name="password" type="password" ref={(input) => {this. passwordInput = input}} placeholder="password"></input>
				</label>

				<input style={{width: "100%"}} type="submit" className="btn btn-primary" value="Login"></input>
				</form>
			</div>
        );
    }
}

export default Login;