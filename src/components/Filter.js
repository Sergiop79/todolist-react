import React, { Component } from 'react'

class Filter extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this._isActive = this._isActive.bind(this)
  }

  handleClick (e) {
    this.props.onFilter(e.target.dataset.filter)
  }

  _isActive (filter) {
    return this.props.filter === filter
  }

  render () {
    const { active, all, completed } = this.props
    return (
      <div className='todo__footer'>
        <button
          data-filter='all'
          className={`todo__filter__btn ${this._isActive('all') ? 'todo__filter__btn--active' : ''}`}
          onClick={this.handleClick}>All {all}</button>
        <button
          data-filter='active'
          className={`todo__filter__btn ${this._isActive('active') ? 'todo__filter__btn--active' : ''}`}
          onClick={this.handleClick}>Active {active}</button>
        <button
          data-filter='completed'
          className={`todo__filter__btn ${this._isActive('completed') ? 'todo__filter__btn--active' : ''}`}
          onClick={this.handleClick}>Completed {completed}</button>
      </div>
    )
  }
}

export default Filter
