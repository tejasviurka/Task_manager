import React, { useState } from "react";
import './Styles/TaskInput.css';


const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAdd = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle.trim());
      setTaskTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
