import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app, facebookProvider } from '../base';


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
				<div className="section pt-3 pb-3 bg-white">
					<div className="container">
					<div className="row">
					<div className="col-lg-4 mr-auto ml-auto">
						<div className="card rounded border">
						<div className="card-body">
						<div className="footer text-center">
							<button style={{width: "100%", cursor: "pointer"}} className="btn btn-primary btn-round btn-lg btn-block loginBtn loginBtn--facebook" onClick={() => { this.authWithFacebook() }}>
							Login with Facebook
							</button>
							<hr/>
							<h5>Login with email</h5>
						
						</div>

						<form className="form" onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form}}>
							<div className="content">
								<div className="input-group form-group-no-border input-lg">
									<span className="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
									<input className="form-control" name="email" type="email" ref={(input) => {this. emailInput = input}} placeholder="email"></input>
								</div>
								<div className="input-group form-group-no-border input-lg">
									<span className="input-group-addon"><i class="fa fa-lock" aria-hidden="true"></i></span>
									<input className="form-control" name="password" type="password" ref={(input) => {this. passwordInput = input}} placeholder="password"></input>
									
								</div>
							</div>
							<div className="footer text-center">
								
								<input className="btn btn-primary btn-round btn-lg btn-block" type="submit" value="Login"></input>
							</div>
							<div className="pull-left">
								<h6><small><a href="#" className="link">Create Account</a></small></h6>
							</div>
							<div className="pull-right">
								<h6><small><a href="#" className="link">Need Help?</a></small></h6>
							</div>
						</form>
					</div>
					</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        );
    }
}

export default Login;