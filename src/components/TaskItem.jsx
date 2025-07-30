import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
