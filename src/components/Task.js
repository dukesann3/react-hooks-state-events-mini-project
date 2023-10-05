import React from "react";

function Task({ category, text, removeTasks }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text + category} onClick={(e) => { removeTasks(e) }}>X</button>
    </div>
  );
}

export default Task;