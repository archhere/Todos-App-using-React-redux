import React from 'react';

const TodoListItem = (props) => {

  return (
    <div>
      {props.todo.title}
    </div>
  )
}

export default TodoListItem;
