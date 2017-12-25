import React, { Component } from 'react';
import { connect } from 'react-redux'
import {TodoItem} from "./TodoItem";
import {removeTodo, updateTodo} from "./redux/actions";

export class TodoList extends Component {
  render() {
    const todoItems = Object.values(this.props.todoList)
      .sort((a, b) => {
        return b.id - a.id;
      })
      .map((todoData) => {  // Makes from object of objects array of components
        return <TodoItem key={todoData.id}
                         id={todoData.id}
                         isCompleted={todoData.isCompleted}
                         todoText={todoData.todoText}
                         removeTodo={this.props.removeTodo}
                         updateTodo={this.props.updateTodo}/>
      });

    return (
      <ul className="list-group" id="toDoList">
        {
          todoItems
        }
      </ul>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    todoList: state.todoList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (todoId) => {
      dispatch(removeTodo(todoId));
    },
    updateTodo: (todoId, updateData) => {
      dispatch(updateTodo(todoId, updateData));
    }
  };
};

export const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
/*
Функция connect создает обертку над компонентом, которая возьмет нужную компоненту информацию из redux store
с помощью функции mapStateToProps
 */