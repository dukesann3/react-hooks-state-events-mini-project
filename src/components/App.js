import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleSetCategories(e) {
    //if clicked, class should be 'selected'
    e.target.classList.add('selected');
    const allSiblings = e.target.parentElement.children;
    for(let i = 0; i < allSiblings.length; i++){
      if(allSiblings[i].id !== e.target.id){
        allSiblings[i].classList.remove('selected');
      }
    }
    setSelectedCategory(e.target.id);
    //should filter and change class List all around
  }

  function removeTasks(e) {
    setTasks(tasks.filter((task) => {
      const id = task.text + task.category;
      if(id !== e.target.id){
        return true;
      }
      return false;
    }));
  }

  function addTasks(formObj) {
    //need to define formObj 
    setTasks([...tasks, formObj]);
  }

  function onTaskFormSubmit(formObj) {
    if (!formObj || !formObj.text || !formObj.category) {
      alert('need complete form to submit')
      throw new Error('need complete form to submit');
    }
    console.log('is it defaulting?');
    addTasks(formObj);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCatHandler={handleSetCategories} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} removeTasks={removeTasks} />
    </div>
  );
}

export default App;