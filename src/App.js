import React, { Component } from 'react';
import {ConnectedAddTodoForm} from './AddTodoForm';
import {ConnectedTodoList} from "./TodoList";

export class App extends Component {
  render() {
    return (
      <div className="starter-template">
        <h1 className="text-success display-4">Promise App</h1>
        <ConnectedAddTodoForm/>

        <h2>Promise list</h2>
        <ConnectedTodoList/>
      </div>
    );
  }
}