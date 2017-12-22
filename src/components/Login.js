import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import logo from '../logo.svg';

class Login extends Component {
	constructor(props) {
		super(props)
		this.authWithFacebook = this.authWithFacebook.bind(this)
		this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
	}

	authWithFacebook() {
		console.log("authed with facebook")
	}

	authWithEmailPassword(event) {
		event.preventDefault()
		console.log("authed with email")
		console.table([{
			email:this.emailInput.value,
			password: this.passwordInput.value
		}])
	}
    render() {
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