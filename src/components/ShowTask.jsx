import React from 'react'

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleEdit = (id) => {
    const selectedTask = taskList.find(taskItem => taskItem.id === id);
    setTask(selectedTask);
  }
  
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter(taskItem => taskItem.id !== id);
    setTaskList(updatedTaskList);
  }
  
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{taskList?.length ? taskList?.length : 0}</span>
        </div>
        <span className='clearAll' onClick={() => setTaskList([])}>Clear All</span>
      </div>
      <ul>
        {taskList?.map((task) => (
            <li key={task.id}>
              <p>
                <span className='name'>{task.name}</span>
                <span className='time'>{task.time}</span>
              </p>
              <i onClick={() => handleEdit(task.id)}className='bi bi-pencil-square'></i>
              <i onClick={() => handleDelete(task.id)} className='bi bi-trash'></i>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default ShowTask