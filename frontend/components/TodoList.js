import React from 'react'
import Todo from './Todo'

// Your todo list should display a list of todos, an input field, a submit button, and a button to filter out completed todos.
//`<TodoList />` receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array.

export default class TodoList extends React.Component {
  state = {
    showAll: true
  }

  toggleShowAll = evt => {
    this.setState({
      ...this.state, 
      showAll: !this.state.showAll,
    })
  }
  render() {
    const { todos, toggleCompleted } = this.props;
    const filtered = todos.filter(td => !td.completed || this.state.showAll)
    return (
      <div>
        <h2>Todos:</h2>
        {
          filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>))
        }

        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed Todos' : 'Show All'}</button>

      </div>
    )
  }
}
