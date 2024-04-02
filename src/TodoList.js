import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo';


const TodoList = () => {
   const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo ]);
  };
  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo=> todo.id !== id));
  };


return (
  <div>
  <h3>Todo List</h3>
  <NewTodoForm addTodo={addTodo} />
  <div>

    {todos.map(({id, task }) =>
    <Todo
    key={id}
    id={id}
    task={task}

    removeTodo={() => removeTodo(id)}
    />
    )}
  </div>

  </div>

)


};






export default TodoList;