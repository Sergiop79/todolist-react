import './App.css'
import React, { Component } from 'react'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import { getFromLocalStorage, setToLocalStorage } from './utils/Storage'

class App extends Component {
  constructor (props) {
    super(props)

    this.lsKey = 'reactTodos'
    this.state = {
      todos: getFromLocalStorage(this.lsKey),
      filter: 'all'
    }

    this.handleNewItem = this.handleNewItem.bind(this)
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleNewItem (item) {
    const todos = this.state.todos.slice()
    const newItem = {
      id: Date.now(),
      name: item,
      completed: false
    }

    todos.push(newItem)
    this.setState({ todos: todos })
    setToLocalStorage(this.lsKey, todos)
  }

  handleItemChange (itemState) {
    const todos = this.state.todos
      .slice()
      .map(item => {
        if (item.id === itemState.id) {
          item = itemState
        }
        return item
      })

    this.setState({ todos })
    setToLocalStorage(this.lsKey, todos)
  }

  handleDelete (id) {
    const todos = this.state.todos
      .slice()
      .filter(item => item.id !== id)

    this.setState({ todos })
    setToLocalStorage(this.lsKey, todos)
  }

  handleFilter (filter) {
    this.setState({ filter })
  }

  render () {
    const { todos, filter } = this.state
    return (
      <div className='App'>
        <h1>todo</h1>
        <InputForm onNewItem={this.handleNewItem} />
        <TodoList
          todos={todos}
          filter={filter}
          onDelete={this.handleDelete}
          onItemChange={this.handleItemChange}
        />
        {
          todos.length
          ? <Filter
            active={todos.filter(item => !item.completed).length}
            all={todos.length}
            completed={todos.filter(item => item.completed).length}
            onFilter={this.handleFilter}
          />
          : ''
        }
      </div>
    )
  }
}

export default App
