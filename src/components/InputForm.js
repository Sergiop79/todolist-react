import React, { Component } from 'react'

class InputForm extends Component {
  constructor (props) {
    super(props)

    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const value = this.state.value.trim()

    if (value) {
      this.props.onNewItem(value)
    } else {
      console.log('you need to enter a value')
    }

    this.setState({ value: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='todo__form'>
        <input
          className='todo__input'
          onChange={this.handleChange}
          placeholder='What needs to be done?'
          value={this.state.value} />
      </form>
    )
  }
}

export default InputForm
