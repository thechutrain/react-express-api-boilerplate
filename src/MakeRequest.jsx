import React, { Component } from 'react'
import axios from 'axios'

class MakeRequest extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: undefined
		}
	}
	componentDidMount() {
		// ** promise .then should be an arrow function or else it won't get bound!!
		// axios.get('/test').then(function(response) {
		// 	console.log('made request!')
		// 	console.log(this) // is undefined !
		// })

		axios.get('/test').then(response => {
			console.log('made request!')
			this.setState(prevState => {
				return { data: response.data }
			})
		})
	}
	render() {
		return (
			<div className="MakeRequest">
				<p>API data: </p>
				<code>
					<pre>
						{JSON.stringify(this.state.data, null, 2)}

					</pre>
				</code>
			</div>
		)
	}
}

export default MakeRequest
