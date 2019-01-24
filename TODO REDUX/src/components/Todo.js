import React from 'react'
const Todo = ({ onClick, text }) => (
  <li>
    {text}
    <button onClick ={onClick}>x</button>
    </li>
)

export default Todo
