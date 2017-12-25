import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "./actions";

const DEFAULT_STATE = {
  idCounter: 3,
  todoList: {
    0: {
      id: 0,
      isCompleted: false,
      todoText: "bla bla"
    },
    1: {
      id: 1,
      isCompleted: false,
      todoText: "bla bla bla"
    },
    2: {
      id: 2,
      isCompleted: true,
      todoText: "bla bla bla bla"
    }
  }
};

export function todoReducer (previousState = DEFAULT_STATE, action) { // previousState = DEFAULT_STATE - аргумент по умолчанию
  switch (action.type) {
    case ADD_TODO: {
      const todoItem = {
        id: previousState.idCounter,
        isCompleted: false,
        todoText: action.todoText
      };

      return {
        ...previousState,
        idCounter: previousState.idCounter + 1,
        todoList: { // Чтобы реакт отрисовал лист, нужно, чтобы ссылка на него изменилась - для этого он создается новый. Используются неиммутабельные объекты.
          ...previousState.todoList,
          [todoItem.id]: todoItem
        }
      }
    }
    case REMOVE_TODO: {
      let newTodoList = {
        ...previousState.todoList
      };
      delete newTodoList[action.todoId];

      return {
        ...previousState,
        todoList: newTodoList
      }
    }
    case UPDATE_TODO: {
      const updatedTodo = {
        ...previousState.todoList[action.todoId],
        ...action.updateData
      };

      return {
        ...previousState,
        todoList: {
          ...previousState.todoList,
          [action.todoId]: updatedTodo
        }
      }
    }
    default: {
      return previousState
    }
  }
}