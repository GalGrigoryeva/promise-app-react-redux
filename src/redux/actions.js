export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
export const UPDATE_TODO = "update_todo";


export function addTodo (todoText) {
  return {
    type: ADD_TODO,
    todoText
  };
}

export function removeTodo (todoId) {
  return {
    type: REMOVE_TODO,
    todoId
  };
}

export function updateTodo (todoId, updateData) {
  return {
    type: UPDATE_TODO,
    todoId,
    updateData
  };
}