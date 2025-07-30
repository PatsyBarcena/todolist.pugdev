import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No hay tareas aún 💤</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))
      )}
    </ul>
  );
}

export default TaskList;
