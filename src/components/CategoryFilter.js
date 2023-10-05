import React from "react";

function CategoryFilter({ categories, setCatHandler }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return <button key={category} id={category} onClick={(e) => setCatHandler(e)}>{category}</button>
      })};
    </div>
  );
}

export default CategoryFilter;