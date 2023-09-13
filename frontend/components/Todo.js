import React from 'react'

//`<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
export default class Todo extends React.Component {
  render() {

    const { id, name, completed } = this.props.todo
    const { toggleCompleted } = this.props
    return (
      <div onClick={() => toggleCompleted(id)}>
        {name} {completed && '✓'}
      </div>
    )
  }
}
