import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // ✅ GET tareas desde API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') // TEMPORAL para pruebas
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // ✅ POST nueva tarea
  const addTask = (text) => {
    const newTask = {
      title: text,
      completed: false,
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => setTasks([...tasks, data]));
  };

  // ✅ DELETE tarea por id
  const deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  // ✅ DELETE todas las tareas
  const deleteAllTasks = () => {
    Promise.all(
      tasks.map(task =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, { method: 'DELETE' })
      )
    ).then(() => setTasks([]));
  };

  return (
    <div className="app">
      <h1>🌸 To Do List Patsy API</h1>
      <TaskForm addTask={addTask} deleteAllTasks={deleteAllTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
