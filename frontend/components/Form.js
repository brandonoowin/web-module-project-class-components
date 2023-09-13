import React from 'react'
//- `<Form />` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//- Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//- Once a todo is submitted, the Todo List should re-render and show the added todo.

export default class Form extends React.Component {
  state = {
    name: '', 
  }

  onSubmit = evt => {
    evt.preventDefault()
    const {addTodo} = this.props
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state, 
      name: ''
    })
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state, 
      name: value
    })

  }
  render() {
    return (
      <div>
        <form name='todoForm' onSubmit={this.onSubmit}>
          <input type='text' placeholder='Type todo' value={this.state.name} onChange={this.onChange}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}
