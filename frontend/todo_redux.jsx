import React from 'react';
import ReactDOM from 'react-dom'
import rootReducer from './reducers/root_reducer'
import configureStore from './store/store'
import {receiveTodo, receiveTodos } from './actions/todo_actions'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.rootReducer = rootReducer;
  window.store = configureStore();

  ReactDOM.render(<Root store = {store}/>,root);
});
