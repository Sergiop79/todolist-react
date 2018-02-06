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
    this.setState({ value: '' })
    this.props.onNewItem(this.state.value)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder='What needs to be done?'
          value={this.state.value} />
      </form>
    )
  }
}

export default InputForm
