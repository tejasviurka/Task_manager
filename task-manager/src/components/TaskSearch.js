import React from "react";
import './Styles/TaskSearch.css';


const TaskSearch = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleChange}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
    </div>
  );
};

export default TaskSearch;
