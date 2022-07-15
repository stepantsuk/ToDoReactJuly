import React from "react";

import { ToDoItem } from "./todoItem";

class ToDoWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
  }

  filterTasks = (arr) => {
    return [
      ...arr.filter((item) => item.complete === false),
      ...arr.filter((item) => item.complete === true),
    ];
  };

  updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log("updateLocalStorage");
    console.log("updateLocalStorage", this);
  };

  handleChangeInput = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
    console.log("inputText", this.state);
  };

  handleCreateTask = (e, value) => {
    e.preventDefault();
    if (this.state.inputValue) {
      const newTodo = {
        id: Math.round(Math.random() * 10000),
        value: value,
        complete: false,
      };
      this.setState({ inputValue: "", todos: [...this.state.todos, newTodo] });
      //localStorage.setItem("todos", JSON.stringify(this.state.todos));
    } else {
      alert("u cant to do nothing");
    }
  };

  handleKeyDownEnter = (e, value) => {
    if (e.key === "Enter") {
      this.handleCreateTask(e, value);
    }
  };

  handleDeleteTask = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((item) => id !== item.id)],
    });
    //localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  handleToggle = (id) => {
    this.setState({
      todos: [
        ...this.filterTasks(
          this.state.todos.map((item) =>
            item.id === id ? { ...item, complete: !item.complete } : { ...item }
          )
        ),
      ],
    });
  };

  componentDidMount() {
    if (localStorage.todos) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      this.setState({ todos: [...todos] });
    }
  }

  componentDidUpdate() {
    this.updateLocalStorage();
    //localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div className="wrapper">
        <div className="todo">
          <h1 className="todo__title">Мой список дел</h1>
          <div className="todo__input">
            <input
              type="text"
              className="input__task"
              value={this.state.inputValue}
              onChange={(e) => this.handleChangeInput(e)}
              onKeyPress={(e) =>
                this.handleKeyDownEnter(e, this.state.inputValue)
              }
            />
            <button
              className="add__task"
              onClick={(e) => this.handleCreateTask(e, this.state.inputValue)}
            >
              Добавить
            </button>
          </div>
          <ul className="todo__list">
            {this.state.todos.length
              ? this.state.todos.map((item) => {
                  return (
                    <ToDoItem
                      key={item.id}
                      task={item}
                      handleDeleteTask={this.handleDeleteTask}
                      handleToggle={this.handleToggle}
                    />
                  );
                })
              : null}
          </ul>
          <div className="counter">
            Итого:
            <span className="counter__value">
              {" " + this.state.todos.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoWrapper;
