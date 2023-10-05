import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, removeTasks }) {

  function taskFilter() {
    //if mater is all, then it will return every task...
    if (selectedCategory === 'All') {
      return tasks.map((task) => {
        const { category, text } = task;
        return <Task key={text} category={category} text={text} removeTasks={removeTasks} />
      });
    }

    const filteredTasks = tasks.filter(task => task.category === selectedCategory);
    return filteredTasks.map((task) => {
      const { category, text } = task;
      return <Task key={text} category={category} text={text} removeTasks={removeTasks} />
    });

  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {selectedCategory ? taskFilter() : tasks.map((task) => {
        const {text, category} = task;
        return <Task key={text} category={category} text={text} removeTasks={removeTasks} />
      })}
    </div>
  );
}

export default TaskList;