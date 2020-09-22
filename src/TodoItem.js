import React, { Component, Fragment } from 'react'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick() {
        console.log(this.props.keys)
        console.log(this)
        this.props.delete(this.props.keys)
    }
}
export default TodoItem