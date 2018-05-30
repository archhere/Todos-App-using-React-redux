import React from 'react';
import uniqueId from '../../util/unique_id.js';
import merge from 'lodash/merge';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    }
    this.updateChange = this.updateChange.bind(this);
    this.addTodo = this.addTodo.bind(this);

  }

  updateChange(name) {
    return (e) => this.setState({[name]: e.target.value })
  }


  addTodo(e) {
    e.preventDefault();
    let todo = merge({},this.state);
    todo.id = uniqueId();
    this.props.receiveTodo(todo);

  }

  render() {
  return  (
    <form onSubmit={this.addTodo}>

      <label>Title
      </label>
      <input type="text" name="title" value={this.state.title} onChange={this.updateChange("title")}/>

      <label>Body
      </label>
      <input type="text" name="body" value={this.state.body} onChange={this.updateChange("body")}/>
      <input type="submit" value="Add New Todo"/>
    </form>
  )
  }

}

export default TodoForm;
