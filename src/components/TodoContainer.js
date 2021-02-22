import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodos"
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    })
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: [...prevState.todos.filter(todo => todo.id !== id)]
    }))
  }

  addTodo = title => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          // id: this.state.todos.length+1,
          id: uuidv4(),
          title: title,
          completed: false
        }
      ]
    })
  }

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    }))
  };

  state = {
    todos: []
  };

  componentDidMount() {
    const loadedTodos = JSON.parse(localStorage.getItem("todos"))
    if (loadedTodos) this.setState({ todos: loadedTodos })
    else {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(data => this.setState({todos: data}))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo
            addTodoProps={this.addTodo}
          />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdateProps={this.setUpdate}
          />
        </div>
      </div>
    )
  }
}
export default TodoContainer