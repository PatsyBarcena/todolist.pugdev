import React, { useState } from 'react';

function TaskForm({ addTask, deleteAllTasks }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Añadir tarea 🐾"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
      <button type="button" onClick={deleteAllTasks}>🗑️ Borrar todas</button>
    </form>
  );
}

export default TaskForm;
