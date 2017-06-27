import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import LoginComponent from './Components/LoginComponent.jsx'
import HomeComponent from './Components/HomeComponent.jsx'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			token: '',
			loggedIn: false
		}
	}
	render() {
		return (
			<div className="App container-fluid">
				<header style={{ textAlign: 'center', padding: '1em' }}>
					{/*  Display Header up here*/}
					<h2>React authenticated SPA </h2>
				</header>

				{/*  Display Navigation here*/}
				<nav className="navbar">
					<ul className="nav">
						<li className="nav-item mr-2">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item mr-2">
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>
				{/*  Routes for the Components*/}
				<div className="container">
					<Route path="/login" component={LoginComponent} />
					<Route
						exact
						path="/"
						render={() =>
							<HomeComponent
								loggedIn={this.state.loggedIn}
								token={this.state.token}
							/>}
					/>
					{/* <Route
						exact
						path="/"
						component={HomeComponent}
						loggedIn={this.state.loggedIn}
						token={this.state.token}
					/> */}
				</div>
			</div>
		)
	}
}

export default App
