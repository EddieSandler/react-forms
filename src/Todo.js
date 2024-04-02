import React from 'react';

const Todo = ({ id, task, removeTodo }) => {
  return (
    <div className="Todo" style={{ position: 'relative', marginBottom: '10px' }}>
      {task}
      <button onClick={() => removeTodo(id)} style={{
        position: 'absolute',
        right: '10px',
        top: '0',
        cursor: 'pointer'
      }}>
        X
      </button>
    </div>
  );
};


export default Todo;