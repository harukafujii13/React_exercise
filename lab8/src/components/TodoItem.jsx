import { useState, useRef } from 'react'

import styles from '@/style/TodoItem.module.scss'

import Modal from '@/components/Modal'

function TodoItem({ todoItem, deleteTodo }) {

    const [todo, setTodo] = useState(todoItem)
    const [editing, setEditing] = useState(false)

    const inputRef = useRef(null)

    // let viewMode = {}
    // let editMode = {}

    // if(editing) {
    //     viewMode.display = "none"
    // }else{
    //     editMode.display = "none"
    // }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateSubmit = () => {
        setTodo({
            ...todo,
            title: inputRef.current.value
        })
        setEditing(false) //Modal sets to close
    }

    const handleChange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    return (
        <li>
            <div className={styles.item}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />
            <span style={ todo.completed ? { textDecoration: "line-through"}: null}>
                {todo.title}
            </span>
            <button onClick={handleEditing}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>

            {editing && (
            <Modal
                showModal={editing}
                setShowModal={setEditing}
            >
                <input
                    ref={inputRef}
                    type="text"
                    defaultValue={todo.title}
                />
            <button onClick={handleUpdateSubmit}>
                Update
            </button>
            </Modal>)}
        </li>
    )
}

export default TodoItem