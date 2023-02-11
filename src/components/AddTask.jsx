import React from 'react'

const AddTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id) {
      // Editing a task
      const date = new Date();
      const updateTaskList = taskList.map((taskItem) => (
        // taskItem.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : taskItem
        taskItem.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : taskItem
      ));
      setTaskList(updateTaskList);
      // Set to empty after editing a task
      setTask({});

    } else {
      //  Adding a task
      const date = new Date();
      const newTask = { 
      id: date.getTime(), 
      name: e.target.task.value, 
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      // Set to empty after adding a task
      setTask({});
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        {/* If task.name is undefined, then the value is empty so we avoid any error */}
        <input type="text" name='task' value={task.name || ""} autoComplete='off' placeholder='Add Task' maxLength={25} onChange={ e => setTask({...task, name: e.target.value})}/>
        <button type='submit'>{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  )
}

export default AddTask