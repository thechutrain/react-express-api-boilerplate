import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// function LoginComponent() {
// 	return (
// 		<div className="Login">
// 			<form>
// 				<label htmlFor="">
// 					Username:
// 					<input type="text" />
// 				</label>
// 			</form>
// 		</div>
// 	)
// }
// export default LoginComponent

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			redirectTo: null,
			error: false,
			errorMessage: ''
		}
	}
	handleSubmit = e => {
		e.preventDefault()
		console.log('submitting form ...')
		// Make request here ....
		axios
			.post('/api/auth/login', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				// check response.data if it has token or if it has an error!
				if (response.data.token) {
					this.props.setToken(response.data.token)
					this.setState(() => {
						return { username: '', password: '', redirectTo: '/' }
					})
				} else {
					console.log(response.data)
					this.setState(() => {
						return {
							password: '',
							errorMessage: response.data.errorMessage,
							error: true
						}
					})
				}
			})
			.catch(err => {
				console.log(`Axios error making a request to /login route: ${err}`)
			})
	}
	handleChange = (inputKey, e) => {
		e.preventDefault()
		const newValue = e.target.value
		this.setState(prevState => {
			return { [inputKey]: newValue }
		})
	}
	render() {
		return (
			<div className="LoginForm">
				{/*  Handle the Redirect*/}
				{this.state.redirectTo
					? <Redirect to={{ pathname: this.state.redirectTo }} />
					: <div />}
				{/*  Form for Logging in */}
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">
							Username:
							<input
								type="text"
								name="username"
								className="form-control"
								value={this.state.username}
								onChange={this.handleChange.bind(this, 'username')}
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="password">
							Password:
							<input
								type="password"
								className="form-control"
								value={this.state.password}
								onChange={this.handleChange.bind(this, 'password')}
							/>
						</label>
					</div>
					<button type="submit" className="btn btn-info">Submit</button>
				</form>
			</div>
		)
	}
}

export default LoginForm
