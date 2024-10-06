import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
    const [todos, setTodos] = useState([
      'Learn React',
      'Learn Redux',
      'Learn React Native'
  ]);
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(index){
    const newTodos = todos.filter((todo, i) => {
      return index !== i;
    })
    setTodos(newTodos);
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  // useEffect(() => {
  //   if (!localStorage) {
  //     return;
  //   }

  //   let localTodos = localStorage.getItem('todos');
  //   if (!localTodos) {
  //     return;
  //   }
  //   localTodos = JSON.parse(localTodos);
  //   setTodos(localTodos);
  // }, []); // runs on page load

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}>

      </TodoList>
    </>
  )
}

export default App
