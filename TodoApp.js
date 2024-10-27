import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]); // To store list of tasks
  const [input, setInput] = useState(''); // To store input value

  // Function to add a new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput(''); // Clear input after adding
    }
  };

  // Function to remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
            onClick={() => toggleCompletion(index)}
          >
            {task.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevents toggling when clicking remove
              removeTask(index);
            }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
