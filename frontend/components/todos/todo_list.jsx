import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => {

  return (
    <div>
    <h1> Hello</h1>
    <ul>

      {todos.map( (todo) => <li> <TodoListItem todo={todo}/> </li>)}

    </ul>
    <TodoForm receiveTodo = {receiveTodo} />
  </div>
  )
}

export default TodoList;
