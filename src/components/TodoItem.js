import React, { Component } from 'react'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.id,
      name: this.props.name,
      completed: this.props.completed,
      editable: false
    }

    this.handleCheck = this.handleCheck.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleLabelClick = this.handleLabelClick.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    this.handleEditEnter = this.handleEditEnter.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleCheck (e) {
    const checked = e.target.checked
    this.setState({ completed: checked }, () => {
      this.props.onCompleted(this.state)
    })
  }

  deleteItem () {
    const id = this.props.id
    this.props.onDelete(id)
  }

  handleLabelClick (e) {
    e.preventDefault()
    if (!this.state.completed) {
      this.setState({ editable: !this.state.editable })
    }
  }

  handleEditChange (e) {
    this.setState({ name: e.target.value })
  }

  handleEditEnter (e) {
    const ENTER_KEY = 13
    if (e.keyCode === ENTER_KEY) {
      this.setState({ editable: false })
      if (this.state.name.trim() === '') {
        return this.deleteItem()
      }
      this.props.onCompleted(this.state)
    }
  }

  handleBlur (e) {
    this.setState({ editable: false })
    this.props.onCompleted(this.state)
  }

  _renderEditable () {
    if (this.state.editable) {
      return (
        <input
          autoFocus
          onChange={this.handleEditChange}
          onKeyUp={this.handleEditEnter}
          onBlur={this.handleBlur}
          type='text'
          value={this.state.name}
        />
      )
    } else {
      return <label onClick={this.handleLabelClick}>{this.state.name}</label>
    }
  }

  render () {
    const {id} = this.props
    return (
      <li className='todo__list__item'>
        <input
          checked={this.state.completed}
          className='todo__list__item__checkbox'
          id={id}
          onChange={this.handleCheck}
          type='checkbox'
        />
        { this._renderEditable() }
        <button
          className='todo__list__item__destroy'
          onClick={this.deleteItem}>X</button>
      </li>
    )
  }
}

export default TodoItem
