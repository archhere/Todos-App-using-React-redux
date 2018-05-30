const allTodos = (state) => {
  let result = Object.keys(state.todos);
  return result.map((el) => state.todos[el]);
};

export default allTodos;
