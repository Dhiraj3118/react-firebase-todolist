import React from 'react'

function Todo(props) {
    return (
        <li>
            <p>{props.todo.text}</p>
            <button className="deleteButton" onClick={() => props.deleteTodo(props.todo.id)}>❌</button>
        </li>
    )
}

export default Todo
