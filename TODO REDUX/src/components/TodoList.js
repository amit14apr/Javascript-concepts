import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo }) => (
  <ul className="listing">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => deleteTodo(todo.id)}
      />
    )}
  </ul>
)


export default TodoList
