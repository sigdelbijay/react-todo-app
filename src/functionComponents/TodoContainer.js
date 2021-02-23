import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodos"
import { v4 as uuidv4 } from "uuid";
const TodoContainer = () => {

  const [todos, setTodos] = useState(getInitialTodos())

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  const deleteTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const addTodo = title => {
    setTodos([
        ...todos,
        {
          // id: todos.length+1,
          id: uuidv4(),
          title: title,
          completed: false
        }
      ]
    )
  }

  const handleChange = id => {
    setTodos(prevState => (
      prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    ))
  };

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])
  // componentDidMount() {
  //   const loadedTodos = JSON.parse(localStorage.getItem("todos"))
  //   if (loadedTodos) setTodos({ todos: loadedTodos })
  //   else {
  //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(response => response.json())
  //     .then(data => setTodos({todos: data}))
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== todos) {
  //     const temp = JSON.stringify(todos)
  //     localStorage.setItem("todos", temp)
  //   }
  // }

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo
          addTodoProps={addTodo}
        />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdateProps={setUpdate}
        />
      </div>
    </div>
  )
}
export default TodoContainer