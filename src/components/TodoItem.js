import React, { Component } from 'react'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.id,
      name: this.props.name,
      completed: this.props.completed
    }

    this.handleCheck = this.handleCheck.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleCheck (e) {
    const checked = e.target.checked
    this.setState({ completed: checked }, () => {
      this.props.onCompleted(this.state)
    })
  }

  deleteItem (e) {
    const id = this.props.id
    this.props.onDelete(id)
  }

  render () {
    const {name, id} = this.props
    return (
      <li>
        <input id={id} checked={this.state.completed} type='checkbox' onChange={this.handleCheck} />
        <label htmlFor={id}>{name}</label>
        <button onClick={this.deleteItem}>X</button>
      </li>
    )
  }
}

export default TodoItem
