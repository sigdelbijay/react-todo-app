import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodos"
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {

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
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo}/>
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps = {this.deleteTodo}
          />
        </div>
      </div>
    )
  }
}
export default TodoContainer