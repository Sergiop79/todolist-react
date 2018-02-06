import React, { Component } from 'react'

class Filter extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.onFilter(e.target.dataset.filter)
  }

  render () {
    const { active, all, completed } = this.props
    return (
      <div>
        <button
          data-filter='all'
          onClick={this.handleClick}>All - {all}</button>
        <button
          data-filter='active'
          onClick={this.handleClick}>Active - {active}</button>
        <button
          data-filter='completed'
          onClick={this.handleClick}>Completed - {completed}</button>
      </div>
    )
  }
}

export default Filter
