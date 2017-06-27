import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class RegisterForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password1: '',
			password2: ''
		}
	}
	render() {
		return (
			<div className="RegisterForm">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">
							username
							<input type="text" name="username" />
						</label>
					</div>
				</form>
			</div>
		)
	}
}

export default RegisterForm
