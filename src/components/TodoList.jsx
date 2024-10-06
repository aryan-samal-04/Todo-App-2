import React from 'react'
import TodoCard from './TodoCard'


function TodoList(props) {
    const {todos, handleDeleteTodo, handleEditTodo} = props;
  return (
    <ul className="main">
        {todos.map((todo, index) => {
            return (
                <TodoCard key={index}
                index={index}                // Pass the index explicitly
                todo={todo}                  // Pass the todo item explicitly
                handleDeleteTodo={handleDeleteTodo}  
                handleEditTodo={handleEditTodo}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}

export default TodoList