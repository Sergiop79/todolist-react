import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.renderFiltered = this.renderFiltered.bind(this)
    this.handleCompleted = this.handleCompleted.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleCompleted (itemState) {
    this.props.onItemChange(itemState)
  }

  handleDelete (id) {
    this.props.onDelete(id)
  }

  renderFiltered (list, filter) {
    const filtered = filter === 'completed'
      ? list.filter(item => item.completed)
        : filter === 'active'
          ? list.filter(item => !item.completed)
          : list

    return filtered.map(item => {
      return (
        <TodoItem
          completed={item.completed}
          id={item.id}
          key={item.id}
          name={item.name}
          onCompleted={this.handleCompleted}
          onDelete={this.handleDelete}
        />
      )
    })
  }

  render () {
    const { todos, filter } = this.props
    return (
      <ul>
        { this.renderFiltered(todos, filter) }
      </ul>
    )
  }
}

export default TodoList
