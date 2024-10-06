import React, {useState} from 'react';

function TodoInput(props) {
    const { handleAddTodo, todoValue, setTodoValue } = props
    return (
        <header>
            <input placeholder="enter task..." value={todoValue || ""} onChange={(e) => {setTodoValue(e.target.value)}}/>
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue("")}}>Add</button>
        </header>
    )
}

export default TodoInput;