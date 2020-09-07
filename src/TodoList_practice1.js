import React, { Component } from 'react'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			InputValue: ''
		}
	}
	render() {
		return (
			<div>
				<input
					value={this.state.InputValue}
					onChange={this.getInput.bind(this)}
				/>
				<button>Go</button>
				<ul>
					<li>Faker</li>
					<li>Bang</li>
				</ul>
			</div>
		)
	}
	getInput(e) {
		this.setState({
			InputValue: e.target.value
		})
	}
}
export default TodoList