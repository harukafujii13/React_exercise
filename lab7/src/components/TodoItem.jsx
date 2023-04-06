import { useState } from 'react'

function TodoItem({ todoItem, deleteTodo }) {
    const [todo, setTodo] = useState(todoItem)

    const handlechange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handlechange}
            />
            <span style={ todo.completed ? { textDecoration: "line-through"}: null}>
                {todo.title}
            </span>
            <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
        </li>
    )
}

export default TodoItem