import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {todoReducer} from "./redux/todoReducer";

import registerServiceWorker from './registerServiceWorker';


const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

/*
  Store - хранилище состояния, имеет reducers и метод dispatch action
  Reducer - функция, которая принимает объект состояния и action и возвращает новый объект или старый, если ничего не изменилось.
  Store прогоняет все reducer'ы через объект
  Action - объект, по которому reducer понимает, как нужно изменить state
*/
