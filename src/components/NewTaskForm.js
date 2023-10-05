import { React, useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {

  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  function categoriesWithoutAll() {
    const filteredCategory = categories.filter(cat => cat !== 'All');
    return filteredCategory.map((cat) => {
      return <option key={cat} onChange={(e) => setCategory(e.target.value)}>{cat}</option>
    })
  }

  function taskSubmitHandler(e) {
    e.preventDefault();
    const formObj = {
      text: text,
      category: category
    }
    onTaskFormSubmit(formObj)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => taskSubmitHandler(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categoriesWithoutAll()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;