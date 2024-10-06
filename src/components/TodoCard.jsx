import React from 'react'

function TodoCard(props) {
    const {index, children, handleDeleteTodo, handleEditTodo} = props;
  return (
    <li className="todoItem" key={index}>
        {children}
        <div className="actionsContainer">
            <button onClick={() => {handleEditTodo(index)}}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => {handleDeleteTodo(index)}}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    </li>
    )
}

export default TodoCard;