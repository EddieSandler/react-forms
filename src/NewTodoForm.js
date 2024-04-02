import React, { useState } from "react";


const NewTodoForm = ({addTodo}) => {

  const [task, setTask] = useState("")

  const handleChange = e => {
   setTask( e.target.value);
    }


  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({task,id:Date.now() })
    setTask("")
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

      <div>
      <label htmlFor="task">Todo </label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="enter task"
        value={task}
        onChange={handleChange}
      />
</div>
</form>
</div>
)
}

export default NewTodoForm