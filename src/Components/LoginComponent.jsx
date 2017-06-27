import React, { Component } from 'react'

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
			password: ''
		}
	}
	handleSubmit = e => {
		e.preventDefault()
		console.log('submitting form ...')
		// Make request here ....
		this.setState(() => {
			return { username: '', password: '' }
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
		)
	}
}
export default LoginForm
