import React from 'react';
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getID = () => ++id;

const initialTodos = [
  { id: getID(), name: 'Walk the dog', completed: false }, 
  { id: getID(), name: 'Learn React', completed: true },
  { id: getID(), name: 'Have Fun', completed: false },
]
export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = ( name ) => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.concat({ id: getID(), completed: false, name})
    })
  }

  handleChange = (event) => {
    this.setState({todo: event.target.value})
  }

  handleSubmit = () => {

  }

  toggleCompleted = id => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(td => {
        if (id == td.id) return { ...td, completed: !td.completed }
        return td
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <Form todo={this.state.todo} addTodo={this.addTodo}/>
        
      </div>
    )
  }
}
